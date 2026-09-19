import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rszqptxxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rszqptxxp"/>`,
		"fallback": "file-icons:kicad",
	});
}

export default Component;
