import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlba2bbpu.css';
import '../../css/f/fc1chxb1r.css';
import '../../css/z/zlnuk-krx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlba2bbpu"/><path class="fc1chxb1r"/><path class="zlnuk-krx"/>`,
		"fallback": "selfhst:ipfs-light",
	});
}

export default Component;
