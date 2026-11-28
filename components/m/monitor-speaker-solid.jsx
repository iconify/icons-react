import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk22n923i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk22n923i"/>`,
		"fallback": "iconaut:monitor-speaker-solid",
	});
}

export default Component;
