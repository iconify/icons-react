import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wvj19kbnp.css';
import '../../css/l/lennyzbya.css';
import '../../css/g/g61gfabvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wvj19kbnp"/><path class="lennyzbya"/><path class="g61gfabvb"/></g>`,
		"fallback": "solar:videocamera-off-linear",
	});
}

export default Component;
