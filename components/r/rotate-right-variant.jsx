import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiqac_idz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiqac_idz"/>`,
		"fallback": "mdi:rotate-right-variant",
	});
}

export default Component;
