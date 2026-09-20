import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toxbqhbrx.css';
import '../../css/n/nzo8-bcfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toxbqhbrx"/><path class="nzo8-bcfd"/>`,
		"fallback": "prime:step-forward",
	});
}

export default Component;
