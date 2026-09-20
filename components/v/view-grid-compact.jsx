import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvlubwbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvlubwbag"/>`,
		"fallback": "mdi:view-grid-compact",
	});
}

export default Component;
