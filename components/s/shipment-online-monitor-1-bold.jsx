import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx238s3yb.css';
import '../../css/f/fi7cdacqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx238s3yb"/><path class="fi7cdacqj"/>`,
		"fallback": "streamline-ultimate:shipment-online-monitor-1-bold",
	});
}

export default Component;
