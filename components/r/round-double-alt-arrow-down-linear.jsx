import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/a44mazz6d.css';
import '../../css/w/wcvy2luch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="a44mazz6d"/><path class="wcvy2luch"/></g>`,
		"fallback": "solar:round-double-alt-arrow-down-linear",
	});
}

export default Component;
