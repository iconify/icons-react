import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnp7o8bhw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnp7o8bhw"/>`,
		"fallback": "temaki:sign-and-bench",
	});
}

export default Component;
