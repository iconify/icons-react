import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0qowrdw.css';
import '../../css/b/bc_xb1bux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz0qowrdw"/><path class="bc_xb1bux"/>`,
		"fallback": "qlementine-icons:quality-3-16",
	});
}

export default Component;
