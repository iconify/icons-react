import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2cqa9b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2cqa9b4z"/>`,
		"fallback": "stash:social-facebook-light",
	});
}

export default Component;
