import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msf35150p.css';
import '../../css/c/ch6_fcbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msf35150p"/><path class="ch6_fcbjy"/>`,
		"fallback": "boxicons:location-plus",
	});
}

export default Component;
