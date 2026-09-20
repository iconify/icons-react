import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9hy1yk1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9hy1yk1e"/>`,
		"fallback": "oui:moon",
	});
}

export default Component;
