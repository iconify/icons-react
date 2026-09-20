import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfortsbrm.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfortsbrm"/>`,
		"fallback": "lineicons:slice-2",
	});
}

export default Component;
