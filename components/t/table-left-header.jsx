import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz-04ekur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz-04ekur"/>`,
		"fallback": "jam:table-left-header",
	});
}

export default Component;
