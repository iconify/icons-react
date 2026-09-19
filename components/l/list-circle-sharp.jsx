import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x08vz_rzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x08vz_rzp"/>`,
		"fallback": "ion:list-circle-sharp",
	});
}

export default Component;
