import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qcuzzu3ej.css';
import '../../css/q/qgkb2kbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qcuzzu3ej"/><path class="qgkb2kbfr"/></g>`,
		"fallback": "covid:quarantine-place-house-1",
	});
}

export default Component;
