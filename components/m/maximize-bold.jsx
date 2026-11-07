import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvvgatbpq.css';
import '../../css/x/xgwd3dwqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvvgatbpq"/><path class="xgwd3dwqp"/>`,
		"fallback": "solar:maximize-bold",
	});
}

export default Component;
