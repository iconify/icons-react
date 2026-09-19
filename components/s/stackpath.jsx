import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slafz4i6y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slafz4i6y"/>`,
		"fallback": "fa6-brands:stackpath",
	});
}

export default Component;
