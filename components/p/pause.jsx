import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc12bymlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc12bymlf"/>`,
		"fallback": "noviair-light:pause",
	});
}

export default Component;
