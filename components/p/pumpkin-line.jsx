import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjirrmf2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjirrmf2g"/>`,
		"fallback": "mingcute:pumpkin-line",
	});
}

export default Component;
