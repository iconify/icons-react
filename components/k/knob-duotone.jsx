import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9n4cmzlx.css';
import '../../css/v/voi9s6hpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9n4cmzlx"/><path class="voi9s6hpy"/></g>`,
		"fallback": "si:knob-duotone",
	});
}

export default Component;
