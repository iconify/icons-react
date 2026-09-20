import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkhijlqwg.css';
import '../../css/t/t6lrtvlfz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkhijlqwg"/><path class="t6lrtvlfz"/>`,
		"fallback": "qlementine-icons:pages-last-16",
	});
}

export default Component;
