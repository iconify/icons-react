import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m209dob5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m209dob5m"/>`,
		"fallback": "thesvg:uipath",
	});
}

export default Component;
