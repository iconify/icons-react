import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alx985b2a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alx985b2a"/>`,
		"fallback": "osmic:railway-halt-14",
	});
}

export default Component;
