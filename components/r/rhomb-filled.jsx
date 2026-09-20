import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlg3n8bgv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlg3n8bgv"/>`,
		"fallback": "ix:rhomb-filled",
	});
}

export default Component;
