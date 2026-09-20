import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt-fvkbaw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt-fvkbaw"/>`,
		"fallback": "pinhead:sobbing-face-in-circle",
	});
}

export default Component;
