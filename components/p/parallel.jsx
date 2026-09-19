import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mld48g7cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mld48g7cg"/>`,
		"fallback": "boxicons:parallel",
	});
}

export default Component;
