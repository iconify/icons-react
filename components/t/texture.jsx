import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfuom7_gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfuom7_gb"/>`,
		"fallback": "mdi:texture",
	});
}

export default Component;
