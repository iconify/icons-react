import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_fa0dyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm_fa0dyd"/>`,
		"fallback": "streamline-sharp:receipt-add",
	});
}

export default Component;
