import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq3_rzi9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq3_rzi9v"/>`,
		"fallback": "mdi:security-camera",
	});
}

export default Component;
