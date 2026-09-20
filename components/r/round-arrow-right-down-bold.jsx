import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbcm4tu4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbcm4tu4j"/>`,
		"fallback": "solar:round-arrow-right-down-bold",
	});
}

export default Component;
