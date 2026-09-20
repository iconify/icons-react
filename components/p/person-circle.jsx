import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds6outb7u.css';
import '../../css/e/e6pmp0b8v.css';
import '../../css/r/r1dv0f0sg.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g transform="translate(3 3)" class="ds6outb7u"><circle class="e6pmp0b8v"/><path class="r1dv0f0sg"/></g><path clip-rule="evenodd" class="jfigzne9w"/></g>`,
		"fallback": "pepicons-pencil:person-circle",
	});
}

export default Component;
