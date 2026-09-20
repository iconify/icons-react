import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiu3adc7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiu3adc7c"/>`,
		"fallback": "osmic:kiosk-14",
	});
}

export default Component;
