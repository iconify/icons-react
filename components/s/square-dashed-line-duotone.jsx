import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijz7qebjq.css';
import '../../css/q/qubz_xvrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ijz7qebjq"/><path class="qubz_xvrd"/></g>`,
		"fallback": "solar:square-dashed-line-duotone",
	});
}

export default Component;
