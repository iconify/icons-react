import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg3njrbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg3njrbjv"/>`,
		"fallback": "streamline-ultimate:laundry-hand-wash",
	});
}

export default Component;
