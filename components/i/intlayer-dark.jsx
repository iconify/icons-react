import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_3tac-mi.css';
import '../../css/i/iebp_9cqm.css';
import '../../css/y/ygp2y4lsg.css';

const viewBox = {"width":480,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGx22VTcBv" class="v_3tac-mi"/></defs><g class="iebp_9cqm"><use href="#SVGx22VTcBv"/><use href="#SVGx22VTcBv"/><path class="ygp2y4lsg"/></g>`,
		"fallback": "thesvg-color:intlayer-dark",
	});
}

export default Component;
