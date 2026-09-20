import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nez2uwj1y.css';
import '../../css/x/xw8s3cc_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nez2uwj1y"/><path class="xw8s3cc_m"/></g>`,
		"fallback": "streamline-ultimate:office-file-text",
	});
}

export default Component;
