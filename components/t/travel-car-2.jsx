import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iceq1soan.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iceq1soan"/>`,
		"fallback": "streamline-block:travel-car-2",
	});
}

export default Component;
