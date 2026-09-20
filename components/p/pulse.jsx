import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdnqjebwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle r="0" class="vdnqjebwm"><animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="0;11"/><animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"/></circle>`,
		"fallback": "svg-spinners:pulse",
	});
}

export default Component;
