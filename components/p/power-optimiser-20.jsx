import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h99zlyu1o.css';
import '../../css/r/rfb36bc4u.css';
import '../../css/f/fhp3j8bfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h99zlyu1o"/><path class="rfb36bc4u"/><path class="fhp3j8bfa"/>`,
		"fallback": "energy-icons:power-optimiser-20",
	});
}

export default Component;
