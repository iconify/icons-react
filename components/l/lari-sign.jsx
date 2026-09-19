import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us-2mi8ki.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us-2mi8ki"/>`,
		"fallback": "fa6-solid:lari-sign",
	});
}

export default Component;
