import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grbzzob4o.css';
import '../../css/t/trg2kib5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grbzzob4o"/><path class="trg2kib5m"/>`,
		"fallback": "solar:link-round-angle-bold",
	});
}

export default Component;
