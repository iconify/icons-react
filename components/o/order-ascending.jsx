import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iav3n6ptp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iav3n6ptp"/>`,
		"fallback": "tdesign:order-ascending",
	});
}

export default Component;
