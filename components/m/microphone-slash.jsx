import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r89124h4e.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r89124h4e"/>`,
		"fallback": "fa6-solid:microphone-slash",
	});
}

export default Component;
