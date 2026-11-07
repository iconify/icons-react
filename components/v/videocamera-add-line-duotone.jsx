import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ychitgsnk.css';
import '../../css/l/lennyzbya.css';
import '../../css/g/gokb5qbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ychitgsnk"/><path class="lennyzbya"/><path class="gokb5qbpv"/></g>`,
		"fallback": "solar:videocamera-add-line-duotone",
	});
}

export default Component;
