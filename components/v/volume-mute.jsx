import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my03x_qnm.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my03x_qnm"/>`,
		"fallback": "lineicons:volume-mute",
	});
}

export default Component;
