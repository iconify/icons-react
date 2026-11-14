import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ob40y1u8s.css';
import '../../css/o/ov4muo9iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ob40y1u8s"/><path class="ov4muo9iz"/></g>`,
		"fallback": "hugeicons:road-01",
	});
}

export default Component;
