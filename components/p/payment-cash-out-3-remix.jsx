import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt54wcczy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt54wcczy"/>`,
		"fallback": "streamline:payment-cash-out-3-remix",
	});
}

export default Component;
