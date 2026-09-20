import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxox9ob4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxox9ob4e"/>`,
		"fallback": "stash:social-facebook",
	});
}

export default Component;
