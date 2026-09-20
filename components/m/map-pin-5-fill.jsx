import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpkk2ibpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpkk2ibpw"/>`,
		"fallback": "ri:map-pin-5-fill",
	});
}

export default Component;
