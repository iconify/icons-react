import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lg4hmt8ek.css';
import '../../css/v/vgjwohkdf.css';
import '../../css/z/z7txwwbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lg4hmt8ek"/><path class="vgjwohkdf"/><path class="z7txwwbpg"/></g>`,
		"fallback": "solar:map-line-duotone",
	});
}

export default Component;
