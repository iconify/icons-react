import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ombcu7bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ombcu7bfg"/>`,
		"fallback": "boxicons:shield-half-filled",
	});
}

export default Component;
