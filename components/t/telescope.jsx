import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwq8ovz5g.css';
import '../../css/l/lp988pb1p.css';
import '../../css/o/od3kxxq7x.css';
import '../../css/u/unu5941jl.css';
import '../../css/c/cz6baubov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mwq8ovz5g"/><path class="lp988pb1p"/><path class="od3kxxq7x"/><path class="unu5941jl"/><path class="cz6baubov"/></g>`,
		"fallback": "fluent-emoji-flat:telescope",
	});
}

export default Component;
