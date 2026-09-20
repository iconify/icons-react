import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5w8kubkf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5w8kubkf"/>`,
		"fallback": "pinhead:railway-track-crossing-solid-line",
	});
}

export default Component;
