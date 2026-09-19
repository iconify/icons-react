import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtgl5k4ha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtgl5k4ha"/>`,
		"fallback": "file-icons:modelica",
	});
}

export default Component;
