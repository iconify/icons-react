import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxb4yw5qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxb4yw5qo"/>`,
		"fallback": "uil:step-backward-alt",
	});
}

export default Component;
