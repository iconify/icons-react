import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nicochb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nicochb_t"/>`,
		"fallback": "mdi:wave",
	});
}

export default Component;
