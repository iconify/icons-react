import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqq221b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqq221b6i"/>`,
		"fallback": "mdi:smoke-detector-outline",
	});
}

export default Component;
