import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4p_lbhmc.css';
import '../../css/h/hrou1ov-o.css';
import '../../css/j/j92vpxe-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="c4p_lbhmc"/><path class="hrou1ov-o"/><path class="j92vpxe-i"/>`,
		"fallback": "selfhst:opentodo",
	});
}

export default Component;
