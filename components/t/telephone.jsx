import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtfe5fs5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtfe5fs5w"/>`,
		"fallback": "roentgen:telephone",
	});
}

export default Component;
