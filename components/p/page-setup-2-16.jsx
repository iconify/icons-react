import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5xia0bqe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5xia0bqe"/>`,
		"fallback": "qlementine-icons:page-setup-2-16",
	});
}

export default Component;
