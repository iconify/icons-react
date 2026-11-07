import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihkre-bnx.css';
import '../../css/v/v7i0-vbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihkre-bnx"/><path clip-rule="evenodd" class="v7i0-vbmr"/>`,
		"fallback": "solar:printer-outline",
	});
}

export default Component;
