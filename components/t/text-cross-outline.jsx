import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq578qb5q.css';
import '../../css/f/f3nkh-bxi.css';
import '../../css/d/d32vjom7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq578qb5q"/><path class="f3nkh-bxi"/><path class="d32vjom7o"/>`,
		"fallback": "solar:text-cross-outline",
	});
}

export default Component;
