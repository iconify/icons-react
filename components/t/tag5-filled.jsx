import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihca-gn3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihca-gn3y"/>`,
		"fallback": "reicon:tag5-filled",
	});
}

export default Component;
