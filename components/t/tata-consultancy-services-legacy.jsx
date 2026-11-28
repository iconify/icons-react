import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv90ixbeh.css';

const viewBox = {"width":956.693,"height":342.992};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv90ixbeh"/>`,
		"fallback": "thesvg-color:tata-consultancy-services-legacy",
	});
}

export default Component;
