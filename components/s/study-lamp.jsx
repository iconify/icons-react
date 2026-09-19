import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fd7fxu0eo.css';
import '../../css/g/geplcma4c.css';
import '../../css/b/bwm5pk45n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fd7fxu0eo"/><path class="geplcma4c"/><path class="bwm5pk45n"/></g>`,
		"fallback": "hugeicons:study-lamp",
	});
}

export default Component;
