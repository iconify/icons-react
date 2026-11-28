import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5zurwsaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5zurwsaf"/>`,
		"fallback": "iconaut:van-solid",
	});
}

export default Component;
