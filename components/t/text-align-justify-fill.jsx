import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4dzq_bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4dzq_bfg"/>`,
		"fallback": "mingcute:text-align-justify-fill",
	});
}

export default Component;
