import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeu8ueilu.css';
import '../../css/b/bbopbtb8a.css';
import '../../css/w/w3r7knbro.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="zeu8ueilu"/><path class="bbopbtb8a"/><path class="w3r7knbro"/></g>`,
		"fallback": "iconito:spinach",
	});
}

export default Component;
