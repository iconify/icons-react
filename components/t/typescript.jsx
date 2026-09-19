import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy2xwebtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy2xwebtb"/>`,
		"fallback": "file-icons:typescript",
	});
}

export default Component;
