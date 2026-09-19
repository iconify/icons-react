import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb0ublros.css';
import '../../css/j/jwnh_illk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb0ublros"/><path class="jwnh_illk"/>`,
		"fallback": "boxicons:user-square",
	});
}

export default Component;
