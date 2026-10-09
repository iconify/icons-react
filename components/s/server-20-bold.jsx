import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oypv3gvwf.css';
import '../../css/i/iv7ikabdy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oypv3gvwf"/><path class="iv7ikabdy"/>`,
		"fallback": "energy-icons:server-20-bold",
	});
}

export default Component;
