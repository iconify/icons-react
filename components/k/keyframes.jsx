import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aer9-85le.css';
import '../../css/q/qg93mcc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aer9-85le"/><path class="qg93mcc7m"/></g>`,
		"fallback": "tabler:keyframes",
	});
}

export default Component;
