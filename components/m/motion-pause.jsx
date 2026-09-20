import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4fq1ibme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4fq1ibme"/>`,
		"fallback": "mdi:motion-pause",
	});
}

export default Component;
