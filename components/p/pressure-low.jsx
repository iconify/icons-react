import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvfykbia.css';
import '../../css/n/no8fa1cjf.css';
import '../../css/o/oplhy-91w.css';
import '../../css/i/i4a0lvgcm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path opacity="0" class="wwvfykbia"><animateTransform attributeName="transform" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"/><animate attributeName="opacity" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path><path opacity="0" class="no8fa1cjf"><animateTransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"/><animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path><path opacity="0" class="oplhy-91w"><animateTransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"/><animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path><path opacity="0" class="i4a0lvgcm"><animateTransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"/><animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"/></path>`,
		"fallback": "meteocons:pressure-low",
	});
}

export default Component;
