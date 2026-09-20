import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqxqd7bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqxqd7bdv"/>`,
		"fallback": "ri:police-badge-line",
	});
}

export default Component;
