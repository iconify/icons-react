import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klncv4kwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klncv4kwi"/>`,
		"fallback": "mingcute:toilet-paper-line",
	});
}

export default Component;
