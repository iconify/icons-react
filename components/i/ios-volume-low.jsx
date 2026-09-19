import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlwegtczi.css';
import '../../css/t/t4u_3fbho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlwegtczi"/><path class="t4u_3fbho"/>`,
		"fallback": "ion:ios-volume-low",
	});
}

export default Component;
