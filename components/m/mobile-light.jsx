import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3exvvawo.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pkgjvccjw.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/u/uto0n9pso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGka9CIbLw" class="k3exvvawo"/></defs><mask id="SVGKIv1JDvK" width="12" height="20" x="6" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="pkgjvccjw"/><use href="#SVGka9CIbLw"/></mask><g class="h01tyzbfu"><use href="#SVGka9CIbLw" mask="url(#SVGKIv1JDvK)" class="l0bn-3b4l"/><path class="uto0n9pso"/></g>`,
		"fallback": "lets-icons:mobile-light",
	});
}

export default Component;
