import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgor2ducd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgor2ducd"/>`,
		"fallback": "boxicons:scan-ar",
	});
}

export default Component;
