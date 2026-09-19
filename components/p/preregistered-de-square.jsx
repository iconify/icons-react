import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7gmyhb7x.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7gmyhb7x"/>`,
		"fallback": "academicons:preregistered-de-square",
	});
}

export default Component;
