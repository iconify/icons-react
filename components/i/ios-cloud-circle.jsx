import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvi9l7iyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvi9l7iyw"/>`,
		"fallback": "ion:ios-cloud-circle",
	});
}

export default Component;
