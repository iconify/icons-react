import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw72_ccft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw72_ccft"/>`,
		"fallback": "mynaui:letter-q",
	});
}

export default Component;
