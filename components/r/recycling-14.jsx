import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekntucc5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekntucc5u"/>`,
		"fallback": "osmic:recycling-14",
	});
}

export default Component;
