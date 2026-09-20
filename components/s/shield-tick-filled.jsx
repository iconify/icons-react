import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfo71rzom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfo71rzom"/>`,
		"fallback": "reicon:shield-tick-filled",
	});
}

export default Component;
