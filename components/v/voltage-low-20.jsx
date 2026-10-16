import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlwbi4p-v.css';
import '../../css/f/f_y7kz9fi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlwbi4p-v"/><path class="f_y7kz9fi"/>`,
		"fallback": "energy-icons:voltage-low-20",
	});
}

export default Component;
