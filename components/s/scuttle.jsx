import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0p_qpq5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0p_qpq5m"/>`,
		"fallback": "selfhst:scuttle",
	});
}

export default Component;
