import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao-y3_km.css';
import '../../css/c/csp4cxb4v.css';
import '../../css/p/ptrg_gs-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao-y3_km"/><path class="csp4cxb4v"/><path class="ptrg_gs-t"/>`,
		"fallback": "solar:panels-top-left-bold-duotone",
	});
}

export default Component;
