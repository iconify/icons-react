import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amo08gfvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amo08gfvp"/>`,
		"fallback": "mdi:van-passenger",
	});
}

export default Component;
