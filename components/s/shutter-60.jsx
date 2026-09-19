import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxw8ynnbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxw8ynnbm"/>`,
		"fallback": "cbi:shutter-60",
	});
}

export default Component;
