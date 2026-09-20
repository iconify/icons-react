import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quk-u9b_r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quk-u9b_r"/>`,
		"fallback": "maki:jewelry-store",
	});
}

export default Component;
