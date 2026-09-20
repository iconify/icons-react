import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_q6zofxi.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_q6zofxi"/>`,
		"fallback": "jam:trophy",
	});
}

export default Component;
