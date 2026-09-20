import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd0x4bpta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd0x4bpta"/>`,
		"fallback": "nimbus:moon",
	});
}

export default Component;
