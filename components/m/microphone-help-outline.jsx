import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eplpgs1zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eplpgs1zp"/>`,
		"fallback": "mdi:microphone-help-outline",
	});
}

export default Component;
