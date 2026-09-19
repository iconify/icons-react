import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2bpywtk.css';

const viewBox = {"width":1026,"height":703};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2bpywtk"/>`,
		"fallback": "whh:paperboat",
	});
}

export default Component;
