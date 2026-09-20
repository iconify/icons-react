import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmx67wbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmx67wbnv"/>`,
		"fallback": "mdi:smartphone-iphone",
	});
}

export default Component;
