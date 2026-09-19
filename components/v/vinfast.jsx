import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsx9s6fap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zsx9s6fap"/>`,
		"fallback": "cbi:vinfast",
	});
}

export default Component;
