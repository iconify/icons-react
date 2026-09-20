import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n04d5sb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n04d5sb5d"/>`,
		"fallback": "mynaui:map-pin-minus-inside-solid",
	});
}

export default Component;
