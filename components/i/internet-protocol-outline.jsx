import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/advu9ov5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="advu9ov5d"/>`,
		"fallback": "mdi:internet-protocol-outline",
	});
}

export default Component;
