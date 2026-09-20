import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd6im6kgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd6im6kgv"/>`,
		"fallback": "mdi:tower-beach",
	});
}

export default Component;
