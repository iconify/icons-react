import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we9t8-ysh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we9t8-ysh"/>`,
		"fallback": "boxicons:table-layout-filled",
	});
}

export default Component;
