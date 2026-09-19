import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef-qzd-jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef-qzd-jj"/>`,
		"fallback": "cbi:smart-camera",
	});
}

export default Component;
