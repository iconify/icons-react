import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_4zx6blg.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGGyhq1bul)" class="t_4zx6blg"/><defs><linearGradient id="SVGGyhq1bul" x1="22.717" x2="7.059" y1="28.927" y2="4.523" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:settings-32",
	});
}

export default Component;
