import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sufeeoq6j.css';
import '../../css/w/wyqctrbau.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sufeeoq6j"/><path class="wyqctrbau"/></g>`,
		"fallback": "fluent-emoji-flat:spoon",
	});
}

export default Component;
