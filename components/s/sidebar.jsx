import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r0_2oacvs.css';
import '../../css/t/tlxk6csbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="r0_2oacvs"/><path class="tlxk6csbw"/></g>`,
		"fallback": "matita:sidebar",
	});
}

export default Component;
