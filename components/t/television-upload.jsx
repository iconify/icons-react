import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s-cr8mbps.css';
import '../../css/q/qicdu-bik.css';
import '../../css/q/q2xia5bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s-cr8mbps"/><path class="qicdu-bik"/><path class="q2xia5bww"/></g>`,
		"fallback": "mage:television-upload",
	});
}

export default Component;
