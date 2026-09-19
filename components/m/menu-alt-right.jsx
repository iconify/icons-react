import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcm6c3j0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcm6c3j0s"/>`,
		"fallback": "bx:menu-alt-right",
	});
}

export default Component;
