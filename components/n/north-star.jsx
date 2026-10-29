import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t3ksqlbsm.css';
import '../../css/x/xa2al6jsz.css';
import '../../css/j/jqjffrbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t3ksqlbsm"/><path class="xa2al6jsz"/><path class="jqjffrbpv"/></g>`,
		"fallback": "withicons-bauhaus:north-star",
	});
}

export default Component;
