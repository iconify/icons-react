import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3d7bpber.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3d7bpber"/>`,
		"fallback": "ooui:table-move-column-before-rtl",
	});
}

export default Component;
