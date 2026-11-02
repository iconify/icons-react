import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nda4eiewj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nda4eiewj"/>`,
		"fallback": "mingcute:palette-3-line",
	});
}

export default Component;
