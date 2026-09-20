import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cla7j4u7f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cla7j4u7f"/>`,
		"fallback": "temaki:poster-box",
	});
}

export default Component;
