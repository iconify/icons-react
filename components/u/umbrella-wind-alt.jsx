import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oes8zp1_h.css';
import '../../css/z/zw46xpt_r.css';
import '../../css/d/dk3aixb5k.css';
import '../../css/z/z1xnbn1qu.css';
import '../../css/w/wsme8wsal.css';
import '../../css/z/z3vfg4iaa.css';
import '../../css/c/c-qlwx-4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGktimpeOD" viewBox="0 0 138 96"><path class="oes8zp1_h"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"/></path><path class="zw46xpt_r"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"/></path></symbol></defs><path class="dk3aixb5k"/><g transform="rotate(45 256 256)"><g class="z1xnbn1qu"><path class="wsme8wsal"/><path class="z3vfg4iaa"/><path class="c-qlwx-4g"/></g><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"/></g><use width="138" height="96" href="#SVGktimpeOD" transform="translate(62.5 201)"/>`,
		"fallback": "meteocons:umbrella-wind-alt",
	});
}

export default Component;
