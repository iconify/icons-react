import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wn1njabfl.css';
import '../../css/d/dq4ii8q4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wn1njabfl"/><path class="dq4ii8q4f"/></g>`,
		"fallback": "hugeicons:teacher",
	});
}

export default Component;
