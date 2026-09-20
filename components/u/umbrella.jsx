import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2shf1bna.css';
import '../../css/w/w0pnhi9xs.css';
import '../../css/k/kk5pombug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2shf1bna"/><g><path class="w0pnhi9xs"/><path class="kk5pombug"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"/></g>`,
		"fallback": "meteocons:umbrella",
	});
}

export default Component;
