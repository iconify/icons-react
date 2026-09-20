import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-2m00b1v.css';
import '../../css/a/a9p3m-d8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-2m00b1v"/><path clip-rule="evenodd" class="a9p3m-d8x"/>`,
		"fallback": "qlementine-icons:page-landscape-16",
	});
}

export default Component;
