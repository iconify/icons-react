import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rprbs-bhz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rprbs-bhz"/>`,
		"fallback": "radix-icons:star-filled",
	});
}

export default Component;
