import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz2cl-9kh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz2cl-9kh"/>`,
		"fallback": "fa6-solid:table-cells-row-lock",
	});
}

export default Component;
