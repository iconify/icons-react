import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo0y1z5yp.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo0y1z5yp"/>`,
		"fallback": "el:italic",
	});
}

export default Component;
