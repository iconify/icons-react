import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3j8d_pdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3j8d_pdi"/>`,
		"fallback": "cbi:seven-eleven-australia",
	});
}

export default Component;
