import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/c/cavrtqb0h.css';
import '../../css/y/yvp5mpkiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="cavrtqb0h"/><path class="yvp5mpkiq"/></g>`,
		"fallback": "solar:round-transfer-horizontal-linear",
	});
}

export default Component;
