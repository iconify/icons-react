import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb86f38iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb86f38iz"/>`,
		"fallback": "mdi:volume-source",
	});
}

export default Component;
