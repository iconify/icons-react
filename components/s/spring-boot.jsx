import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tah9bacsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tah9bacsn"/>`,
		"fallback": "bxl:spring-boot",
	});
}

export default Component;
