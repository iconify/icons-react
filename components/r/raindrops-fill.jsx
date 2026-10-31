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
		"content": `<defs><linearGradient id="SVGJmTo1d4q" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="k_nyj5beu"/><stop offset=".5" class="k_nyj5beu"/><stop offset="1" class="hwnz52b0q"/></linearGradient><symbol id="SVGOwM9zdZR" viewBox="0 0 164 245.6"><path fill="url(#SVGJmTo1d4q)" class="b8v-jpptd"/></symbol></defs><use width="164" height="245.6" href="#SVGOwM9zdZR" transform="translate(128 133.43)"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"/></use><use width="164" height="245.6" href="#SVGOwM9zdZR" transform="translate(220 133.43)"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 .9; 1 1; 1 .9"/></use>`,
		"fallback": "meteocons:raindrops-fill",
	});
}

export default Component;
