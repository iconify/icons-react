import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fycvijcmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fycvijcmd"/>`,
		"fallback": "lineicons:truck-delivery-1",
	});
}

export default Component;
