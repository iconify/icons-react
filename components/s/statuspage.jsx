import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt7tskbwm.css';
import '../../css/o/ol788r1ej.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt7tskbwm"/><path class="ol788r1ej"/>`,
		"fallback": "devicon:statuspage",
	});
}

export default Component;
