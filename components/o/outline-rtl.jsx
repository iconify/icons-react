import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofc0q49tn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofc0q49tn"/>`,
		"fallback": "ooui:outline-rtl",
	});
}

export default Component;
