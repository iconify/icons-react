import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmqd7lb1z.css';
import '../../css/s/sk7uvj89p.css';
import '../../css/x/xeh4-vd6j.css';
import '../../css/c/ck8d8_b0m.css';
import '../../css/j/jd3hg5zga.css';
import '../../css/w/w-ppt9bwa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcVHSkeyt" maskUnits="userSpaceOnUse"><circle class="nmqd7lb1z"/></mask><linearGradient id="SVG1lHTrb3O" x1="13.5" x2="114.5" y1="-32.6" y2="160.6" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sk7uvj89p"/><stop offset="1" class="xeh4-vd6j"/></linearGradient></defs><path fill="url(#SVG1lHTrb3O)" mask="url(#SVGcVHSkeyt)" class="ck8d8_b0m"/><path mask="url(#SVGcVHSkeyt)" class="jd3hg5zga"/><path mask="url(#SVGcVHSkeyt)" class="w-ppt9bwa"/>`,
		"fallback": "devicon:starship",
	});
}

export default Component;
