import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srp64xlvv.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srp64xlvv"/>`,
		"fallback": "lineicons:text-align-left",
	});
}

export default Component;
