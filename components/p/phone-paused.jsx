import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miwm2wbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miwm2wbpk"/>`,
		"fallback": "mdi:phone-paused",
	});
}

export default Component;
