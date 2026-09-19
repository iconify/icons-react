import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4h4vibbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4h4vibbi"/>`,
		"fallback": "at-icons:pointer-right",
	});
}

export default Component;
