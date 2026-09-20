import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu4l1t09y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu4l1t09y"/>`,
		"fallback": "mdi-light:television",
	});
}

export default Component;
