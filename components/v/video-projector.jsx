import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urmicr44l.css';
import '../../css/n/nz6tfcbdx.css';
import '../../css/f/f1dep5d6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="urmicr44l"/><path class="nz6tfcbdx"/><path class="f1dep5d6u"/></g>`,
		"fallback": "iconoir:video-projector",
	});
}

export default Component;
