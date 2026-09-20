import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiy024i8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiy024i8h"/>`,
		"fallback": "thesvg-color:wacom",
	});
}

export default Component;
