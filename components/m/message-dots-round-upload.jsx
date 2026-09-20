import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y4ufzepjc.css';
import '../../css/o/ors_gbcaf.css';
import '../../css/r/rvpeigbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y4ufzepjc"/><path class="ors_gbcaf"/><path class="rvpeigbjb"/></g>`,
		"fallback": "mage:message-dots-round-upload",
	});
}

export default Component;
