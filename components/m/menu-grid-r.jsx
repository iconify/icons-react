import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg1eho4bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg1eho4bp"/>`,
		"fallback": "gg:menu-grid-r",
	});
}

export default Component;
