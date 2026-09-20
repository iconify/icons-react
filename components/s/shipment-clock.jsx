import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3mi_ybsx.css';
import '../../css/i/iq4poybgc.css';
import '../../css/v/vlq40abrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f3mi_ybsx"/><path class="iq4poybgc"/><path class="vlq40abrs"/></g>`,
		"fallback": "streamline-ultimate:shipment-clock",
	});
}

export default Component;
