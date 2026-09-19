import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we9xjz3rp.css';
import '../../css/g/g2vc8actl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we9xjz3rp"/><path class="g2vc8actl"/>`,
		"fallback": "ion:md-images",
	});
}

export default Component;
