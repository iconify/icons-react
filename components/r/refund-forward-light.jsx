import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzdv-6b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzdv-6b0b"/>`,
		"fallback": "lets-icons:refund-forward-light",
	});
}

export default Component;
