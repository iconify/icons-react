import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg2k7lbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg2k7lbzs"/>`,
		"fallback": "mdi:rounded-corner",
	});
}

export default Component;
