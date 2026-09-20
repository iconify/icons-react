import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu7ancbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu7ancbnv"/>`,
		"fallback": "mdi:tooltip-cellphone",
	});
}

export default Component;
