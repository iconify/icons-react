import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdd8rx4on.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdd8rx4on"/>`,
		"fallback": "cib:internet-explorer",
	});
}

export default Component;
