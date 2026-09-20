import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxwofm01t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vxwofm01t"/>`,
		"fallback": "solar:square-arrow-left-down-bold",
	});
}

export default Component;
