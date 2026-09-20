import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6t5k5bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6t5k5bap"/>`,
		"fallback": "reicon:square-arrow-left2-filled",
	});
}

export default Component;
