import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzhby49lw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzhby49lw"/>`,
		"fallback": "fa6-solid:vest",
	});
}

export default Component;
