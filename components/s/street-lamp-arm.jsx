import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7vqi-5sw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7vqi-5sw"/>`,
		"fallback": "temaki:street-lamp-arm",
	});
}

export default Component;
