import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzs94db-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzs94db-h"/>`,
		"fallback": "solar:medal-star-outline",
	});
}

export default Component;
