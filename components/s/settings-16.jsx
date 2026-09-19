import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1evzmbgl.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGVOOhMRpu)" class="x1evzmbgl"/><defs><linearGradient id="SVGVOOhMRpu" x1="10.874" x2="4.166" y1="13.534" y2="3.086" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:settings-16",
	});
}

export default Component;
