import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/l/loa18gbiz.css';
import '../../css/d/dijqohbja.css';
import '../../css/a/a9qq5obmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="loa18gbiz"/><path class="dijqohbja"/><path class="a9qq5obmi"/></g>`,
		"fallback": "solar:streets-map-point-line-duotone",
	});
}

export default Component;
