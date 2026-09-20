import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s-cr8mbps.css';
import '../../css/v/vgqbud9cq.css';
import '../../css/c/c9v1_5ibh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s-cr8mbps"/><path class="vgqbud9cq"/><path class="c9v1_5ibh"/></g>`,
		"fallback": "mage:television-download",
	});
}

export default Component;
