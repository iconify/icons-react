import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxib_rb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxib_rb6r"/>`,
		"fallback": "gg:trending-down",
	});
}

export default Component;
