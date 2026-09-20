import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rul21fapv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rul21fapv"/>`,
		"fallback": "nrk:minus-expressive",
	});
}

export default Component;
