import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6g6x7bsy.css';
import '../../css/v/vzru2hbyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6g6x7bsy"/><path clip-rule="evenodd" class="vzru2hbyh"/>`,
		"fallback": "qlementine-icons:sort-file-type-desc-16",
	});
}

export default Component;
