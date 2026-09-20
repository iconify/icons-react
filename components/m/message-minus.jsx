import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r1947tbeu.css';
import '../../css/u/uhr6q42er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r1947tbeu"/><path class="uhr6q42er"/></g>`,
		"fallback": "mage:message-minus",
	});
}

export default Component;
