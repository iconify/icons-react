import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoj9du8fp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoj9du8fp"/>`,
		"fallback": "ooui:table-add-column-after-ltr",
	});
}

export default Component;
