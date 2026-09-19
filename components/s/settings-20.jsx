import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/saig2b03z.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGRC3mDdeu)" class="saig2b03z"/><defs><linearGradient id="SVGRC3mDdeu" x1="14.056" x2="4.533" y1="17.842" y2="3.074" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:settings-20",
	});
}

export default Component;
