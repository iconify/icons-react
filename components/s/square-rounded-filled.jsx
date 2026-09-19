import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds4m469vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ds4m469vp"/>`,
		"fallback": "boxicons:square-rounded-filled",
	});
}

export default Component;
