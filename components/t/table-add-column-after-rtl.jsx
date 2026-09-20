import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6nny44xw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6nny44xw"/>`,
		"fallback": "ooui:table-add-column-after-rtl",
	});
}

export default Component;
