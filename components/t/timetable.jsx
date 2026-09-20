import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzxq2obzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzxq2obzj"/>`,
		"fallback": "mdi:timetable",
	});
}

export default Component;
