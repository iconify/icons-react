import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe6ubvbek.css';
import '../../css/y/ybq961s0r.css';
import '../../css/c/crjp0abmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qe6ubvbek"/><path class="ybq961s0r"/><path class="crjp0abmv"/></g>`,
		"fallback": "hugeicons:money-exchange-01",
	});
}

export default Component;
