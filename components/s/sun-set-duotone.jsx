import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3qoh5kxx.css';
import '../../css/h/hdj4zg9nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i3qoh5kxx"/><path class="hdj4zg9nf"/></g>`,
		"fallback": "si:sun-set-duotone",
	});
}

export default Component;
