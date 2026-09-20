import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcif0d1_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcif0d1_l"/>`,
		"fallback": "streamline-ultimate:scooter-3-bold",
	});
}

export default Component;
