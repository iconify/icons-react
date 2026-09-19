import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt6-q7b0y.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt6-q7b0y"/>`,
		"fallback": "fa-regular:surprise",
	});
}

export default Component;
