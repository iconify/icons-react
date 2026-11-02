import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq0x9-boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq0x9-boc"/>`,
		"fallback": "mingcute:star-topper-fill",
	});
}

export default Component;
