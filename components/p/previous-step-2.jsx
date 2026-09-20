import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nor0fwmgv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nor0fwmgv"/>`,
		"fallback": "lineicons:previous-step-2",
	});
}

export default Component;
