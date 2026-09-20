import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/th7qmabfh.css';
import '../../css/j/j51y-acob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="th7qmabfh"/><path class="j51y-acob"/></g>`,
		"fallback": "keyline-icons:soup-two-tone",
	});
}

export default Component;
