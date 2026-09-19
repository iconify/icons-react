import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl81vn0ac.css';
import '../../css/c/c4ack0t-k.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/t/tim377m3x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGFKyFce3z)" class="jl81vn0ac"/><path fill="url(#SVGuU8CEerF)" class="c4ack0t-k"/><defs><linearGradient id="SVGFKyFce3z" x1="2" x2="30" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGuU8CEerF" x1="12.708" x2="17.351" y1="8.272" y2="23.906" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="tim377m3x"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:question-circle-32",
	});
}

export default Component;
