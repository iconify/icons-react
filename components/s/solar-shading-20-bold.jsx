import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-s9c5bkm.css';
import '../../css/u/uyag2jl5g.css';
import '../../css/l/l4v9huevr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-s9c5bkm"/><path class="uyag2jl5g"/><path class="l4v9huevr"/>`,
		"fallback": "energy-icons:solar-shading-20-bold",
	});
}

export default Component;
