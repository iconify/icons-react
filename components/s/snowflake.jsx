import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi2i9ubvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi2i9ubvk"/>`,
		"fallback": "noviair-light:snowflake",
	});
}

export default Component;
