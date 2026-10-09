import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyzben50c.css';
import '../../css/y/ylpvizbha.css';
import '../../css/a/atgoxpbsa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyzben50c"/><path class="ylpvizbha"/><path class="atgoxpbsa"/>`,
		"fallback": "energy-icons:sensor-20",
	});
}

export default Component;
