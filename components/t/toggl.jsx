import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt_7kd49m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt_7kd49m"/>`,
		"fallback": "thesvg-color:toggl",
	});
}

export default Component;
