import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/req6_nvhf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="req6_nvhf"/>`,
		"fallback": "pinhead:person-walking-with-hiking-pole-wearing-backpack-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
