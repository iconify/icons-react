import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_ty2ebyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_ty2ebyd"/>`,
		"fallback": "streamline-ultimate:keyhole-square-bold",
	});
}

export default Component;
