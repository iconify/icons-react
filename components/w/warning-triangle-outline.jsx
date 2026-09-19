import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/os8xikb0b.css';
import '../../css/t/tsu-j2b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="os8xikb0b"/><path class="tsu-j2b1a"/></g>`,
		"fallback": "iconoir:warning-triangle-outline",
	});
}

export default Component;
