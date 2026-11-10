import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpx07wtst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpx07wtst"/>`,
		"fallback": "sidekickicons:user-check",
	});
}

export default Component;
