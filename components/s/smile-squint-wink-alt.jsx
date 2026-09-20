import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwx2k6b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwx2k6b5o"/>`,
		"fallback": "uil:smile-squint-wink-alt",
	});
}

export default Component;
