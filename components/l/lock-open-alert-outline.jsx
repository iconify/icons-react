import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trvuyet0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trvuyet0a"/>`,
		"fallback": "mdi:lock-open-alert-outline",
	});
}

export default Component;
