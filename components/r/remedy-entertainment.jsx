import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz2soiqdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz2soiqdv"/>`,
		"fallback": "thesvg-color:remedy-entertainment",
	});
}

export default Component;
