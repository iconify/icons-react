import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3ccklbsh.css';
import '../../css/t/t2cylssnp.css';
import '../../css/v/va6ug5b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j3ccklbsh"/><path class="t2cylssnp"/><path class="va6ug5b5i"/></g>`,
		"fallback": "solar:panorama-linear",
	});
}

export default Component;
