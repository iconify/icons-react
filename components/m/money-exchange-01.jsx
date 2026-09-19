import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqo2h9bjj.css';
import '../../css/y/ybq961s0r.css';
import '../../css/g/gqjrifb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqo2h9bjj"/><path class="ybq961s0r"/><path class="gqjrifb4m"/></g>`,
		"fallback": "hugeicons:money-exchange-01",
	});
}

export default Component;
