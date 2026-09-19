import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oke0cx7bg.css';
import '../../css/v/v_z1dlmaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="oke0cx7bg"/><path class="v_z1dlmaq"/></g>`,
		"fallback": "hugeicons:mail-add-01",
	});
}

export default Component;
