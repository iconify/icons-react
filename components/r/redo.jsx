import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es8r095um.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es8r095um"/>`,
		"fallback": "fa-solid:redo",
	});
}

export default Component;
