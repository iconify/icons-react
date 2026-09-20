import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj2firt2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj2firt2c"/>`,
		"fallback": "mdi:label-variant",
	});
}

export default Component;
