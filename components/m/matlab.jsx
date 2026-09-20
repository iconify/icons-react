import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zziiasbpq.css';
import '../../css/z/z176l2i0d.css';
import '../../css/u/ubkr3mbhh.css';

const viewBox = {"width":720,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zziiasbpq"/><path class="z176l2i0d"/><path class="ubkr3mbhh"/>`,
		"fallback": "material-icon-theme:matlab",
	});
}

export default Component;
