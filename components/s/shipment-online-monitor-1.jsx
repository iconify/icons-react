import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/or_kujb0j.css';
import '../../css/w/wpoa2_b5l.css';
import '../../css/r/rhh497bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="or_kujb0j"/><path class="wpoa2_b5l"/><path class="rhh497bzb"/></g>`,
		"fallback": "streamline-ultimate:shipment-online-monitor-1",
	});
}

export default Component;
