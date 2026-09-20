import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ys0c-177f.css';
import '../../css/m/m5-z6nb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ys0c-177f"/><path class="m5-z6nb8w"/></g>`,
		"fallback": "mage:shield-question-mark",
	});
}

export default Component;
