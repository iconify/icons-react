import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoayuz9iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoayuz9iz"/>`,
		"fallback": "reicon:location-tick-filled",
	});
}

export default Component;
