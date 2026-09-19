import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh08mnboz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh08mnboz"/>`,
		"fallback": "fa7-solid:plug-circle-minus",
	});
}

export default Component;
