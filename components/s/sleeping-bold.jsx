import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgdyellrq.css';
import '../../css/s/slqdrx-ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgdyellrq"/><path class="slqdrx-ov"/>`,
		"fallback": "solar:sleeping-bold",
	});
}

export default Component;
