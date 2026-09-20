import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3jjpgbqp.css';
import '../../css/r/rvcx90b2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3jjpgbqp"/><path clip-rule="evenodd" class="rvcx90b2h"/>`,
		"fallback": "qlementine-icons:view-page-facing-16",
	});
}

export default Component;
