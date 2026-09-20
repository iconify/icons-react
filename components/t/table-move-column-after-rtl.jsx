import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld_f683ql.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld_f683ql"/>`,
		"fallback": "ooui:table-move-column-after-rtl",
	});
}

export default Component;
