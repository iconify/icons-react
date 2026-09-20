import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpr-1rm3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpr-1rm3d"/>`,
		"fallback": "mynaui:keyboard-solid",
	});
}

export default Component;
