import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk9brtb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xk9brtb-h"/>`,
		"fallback": "reicon:search-plus4-filled",
	});
}

export default Component;
