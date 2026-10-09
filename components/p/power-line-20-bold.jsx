import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjq_h3bgy.css';
import '../../css/h/h2vk8bchf.css';
import '../../css/m/m88iatbgo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjq_h3bgy"/><path class="h2vk8bchf"/><path class="m88iatbgo"/>`,
		"fallback": "energy-icons:power-line-20-bold",
	});
}

export default Component;
