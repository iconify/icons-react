import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0g-o_bdg.css';
import '../../css/z/ztt_jxlej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0g-o_bdg"/><path class="ztt_jxlej"/>`,
		"fallback": "ion:ios-eye",
	});
}

export default Component;
