import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2iiwfb2x.css';
import '../../css/j/jcusk6gmi.css';
import '../../css/y/yq3ukacfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2iiwfb2x"/><path class="jcusk6gmi"/><path class="yq3ukacfg"/></g>`,
		"fallback": "solar:to-pip-linear",
	});
}

export default Component;
