import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy1t6yb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy1t6yb2g"/>`,
		"fallback": "coolicons:plus-minus-fill-round",
	});
}

export default Component;
