import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucfglomea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucfglomea"/>`,
		"fallback": "mdi:phone-sync-outline",
	});
}

export default Component;
