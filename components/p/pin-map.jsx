import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkj8k7bav.css';
import '../../css/t/tfrl9vblf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pkj8k7bav"/><path class="tfrl9vblf"/></g>`,
		"fallback": "bi:pin-map",
	});
}

export default Component;
