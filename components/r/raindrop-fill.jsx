import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_nyj5beu.css';
import '../../css/h/hwnz52b0q.css';
import '../../css/b/b8v-jpptd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG6PL1kbuH" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="k_nyj5beu"/><stop offset=".5" class="k_nyj5beu"/><stop offset="1" class="hwnz52b0q"/></linearGradient><symbol id="SVGcrEwRd3D" viewBox="0 0 164 245.6"><path fill="url(#SVG6PL1kbuH)" class="b8v-jpptd"><animateTransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"/></path></symbol></defs><use width="164" height="245.6" href="#SVGcrEwRd3D" transform="translate(174 132.43)"/>`,
		"fallback": "meteocons:raindrop-fill",
	});
}

export default Component;
