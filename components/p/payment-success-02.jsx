import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp0j2whzz.css';
import '../../css/i/icr3gcbor.css';
import '../../css/m/mkdq8fbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zp0j2whzz"/><path class="icr3gcbor"/><path class="mkdq8fbby"/></g>`,
		"fallback": "hugeicons:payment-success-02",
	});
}

export default Component;
