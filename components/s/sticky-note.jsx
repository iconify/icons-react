import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpmo-6vfv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpmo-6vfv"/>`,
		"fallback": "fa-solid:sticky-note",
	});
}

export default Component;
