import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_nc4u1cd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_nc4u1cd"/>`,
		"fallback": "streamline:pyramid-shape-solid",
	});
}

export default Component;
