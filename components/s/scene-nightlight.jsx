import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gee_04tds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gee_04tds"/>`,
		"fallback": "cbi:scene-nightlight",
	});
}

export default Component;
