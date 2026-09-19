import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-el4czwj.css';
import '../../css/b/bp4q0jolu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u-el4czwj"/><path class="bp4q0jolu"/>`,
		"fallback": "geo:turf-midpoint",
	});
}

export default Component;
