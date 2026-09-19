import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2wasib1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2wasib1b"/>`,
		"fallback": "at-icons:paintbrush",
	});
}

export default Component;
