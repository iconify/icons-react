import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir3eghbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir3eghbdo"/>`,
		"fallback": "pixel:seedlings",
	});
}

export default Component;
