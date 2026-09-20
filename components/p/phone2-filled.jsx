import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt05jtbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt05jtbeh"/>`,
		"fallback": "reicon:phone2-filled",
	});
}

export default Component;
