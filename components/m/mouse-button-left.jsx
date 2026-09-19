import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vt8ic6rnj.css';
import '../../css/j/jeeuhob4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vt8ic6rnj"/><path class="jeeuhob4h"/></g>`,
		"fallback": "iconoir:mouse-button-left",
	});
}

export default Component;
