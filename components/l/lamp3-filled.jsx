import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52p0wbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h52p0wbbr"/>`,
		"fallback": "reicon:lamp3-filled",
	});
}

export default Component;
