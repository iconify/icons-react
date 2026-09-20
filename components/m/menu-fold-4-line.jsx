import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow68j5b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow68j5b7b"/>`,
		"fallback": "ri:menu-fold-4-line",
	});
}

export default Component;
