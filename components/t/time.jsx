import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs_m5qbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs_m5qbjp"/>`,
		"fallback": "gridicons:time",
	});
}

export default Component;
