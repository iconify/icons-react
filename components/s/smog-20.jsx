import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4mm3xvgd.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4mm3xvgd"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:smog-20",
	});
}

export default Component;
