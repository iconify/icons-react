import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8dfe4y1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8dfe4y1r"/>`,
		"fallback": "selfhst:pleroma-dark",
	});
}

export default Component;
