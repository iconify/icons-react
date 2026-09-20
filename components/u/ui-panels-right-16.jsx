import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt2cd8lqq.css';
import '../../css/f/fohnvn4zr.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt2cd8lqq"/><path class="fohnvn4zr"/><path clip-rule="evenodd" class="zvjeae8vn"/>`,
		"fallback": "qlementine-icons:ui-panels-right-16",
	});
}

export default Component;
