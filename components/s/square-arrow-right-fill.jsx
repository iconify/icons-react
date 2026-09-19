import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blh-a7_ck.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blh-a7_ck"/>`,
		"fallback": "f7:square-arrow-right-fill",
	});
}

export default Component;
