import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imc-y6tvu.css';
import '../../css/q/qv6egzw5f.css';
import '../../css/f/friwwhbgo.css';
import '../../css/k/krqewebem.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imc-y6tvu"/><path class="qv6egzw5f"/><path class="friwwhbgo"/><path class="krqewebem"/></g>`,
		"fallback": "glyphs:layer-foward-duo",
	});
}

export default Component;
