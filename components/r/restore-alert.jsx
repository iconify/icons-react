import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8egr_bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8egr_bni"/>`,
		"fallback": "mdi:restore-alert",
	});
}

export default Component;
