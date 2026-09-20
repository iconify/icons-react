import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdz4gjb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdz4gjb5k"/>`,
		"fallback": "mdi:nordic-walking",
	});
}

export default Component;
