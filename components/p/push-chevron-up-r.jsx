import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pck07qbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pck07qbnx"/>`,
		"fallback": "gg:push-chevron-up-r",
	});
}

export default Component;
