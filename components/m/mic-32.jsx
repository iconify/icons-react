import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1gffdbcd.css';
import '../../css/c/c0nt0jbgh.css';
import '../../css/l/l8zfi6bbl.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/gsug0sx0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGztwcae5p)" class="p1gffdbcd"/><path fill="url(#SVGPKxg3dSc)" class="c0nt0jbgh"/><defs><linearGradient id="SVGztwcae5p" x1="6" x2="15.227" y1="8.56" y2="31.59" gradientUnits="userSpaceOnUse"><stop class="l8zfi6bbl"/><stop offset="1" class="tt8br1bqq"/></linearGradient><linearGradient id="SVGPKxg3dSc" x1="7" x2="17.069" y1="-2.545" y2="33.449" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="gsug0sx0f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:mic-32",
	});
}

export default Component;
