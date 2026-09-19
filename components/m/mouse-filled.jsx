import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-y12rbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-y12rbii"/>`,
		"fallback": "boxicons:mouse-filled",
	});
}

export default Component;
