import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3a-qlz6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3a-qlz6u"/>`,
		"fallback": "stash:social-twitter-light",
	});
}

export default Component;
