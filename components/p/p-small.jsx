import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdqoihb6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdqoihb6h"/>`,
		"fallback": "roentgen:p-small",
	});
}

export default Component;
