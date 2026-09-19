import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1nvl0bbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1nvl0bbm"/>`,
		"fallback": "file-icons:kivy",
	});
}

export default Component;
