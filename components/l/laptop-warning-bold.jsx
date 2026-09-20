import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_ggsobwy.css';
import '../../css/g/gxkm953bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_ggsobwy"/><path class="gxkm953bo"/>`,
		"fallback": "streamline-ultimate:laptop-warning-bold",
	});
}

export default Component;
