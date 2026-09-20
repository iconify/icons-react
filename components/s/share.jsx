import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-ozx_b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-ozx_b2b"/>`,
		"fallback": "mi:share",
	});
}

export default Component;
