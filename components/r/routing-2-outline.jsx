import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti_9tgx1a.css';
import '../../css/q/qpq6tjknf.css';
import '../../css/s/su7532b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti_9tgx1a"/><path class="qpq6tjknf"/><path clip-rule="evenodd" class="su7532b5u"/>`,
		"fallback": "solar:routing-2-outline",
	});
}

export default Component;
