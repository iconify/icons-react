import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4l7e-bpw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4l7e-bpw"/>`,
		"fallback": "pullo:replay-10",
	});
}

export default Component;
