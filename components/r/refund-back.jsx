import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkp9akf4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkp9akf4e"/>`,
		"fallback": "lets-icons:refund-back",
	});
}

export default Component;
