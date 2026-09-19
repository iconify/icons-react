import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up4_10tsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up4_10tsq"/>`,
		"fallback": "codicon:triangle-down",
	});
}

export default Component;
