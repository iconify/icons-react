import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke4wifbjz.css';
import '../../css/q/qeliok-fz.css';
import '../../css/m/mb-jqwb9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke4wifbjz"/><path class="qeliok-fz"/><path class="mb-jqwb9o"/>`,
		"fallback": "material-icon-theme:tune",
	});
}

export default Component;
