import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h07yl7b2h.css';
import '../../css/m/m2bvsebeo.css';
import '../../css/z/z7i3a0bad.css';

const viewBox = {"width":23,"height":23};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h07yl7b2h"/><path class="m2bvsebeo"/><path class="z7i3a0bad"/></g>`,
		"fallback": "thesvg-color:unleash",
	});
}

export default Component;
