import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak0v_fljm.css';
import '../../css/q/q-0tevbrd.css';
import '../../css/s/st8r_y1jl.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g transform="translate(3 3)"><circle class="ak0v_fljm"/><path class="q-0tevbrd"/><path class="st8r_y1jl"/></g><path clip-rule="evenodd" class="jfigzne9w"/></g>`,
		"fallback": "pepicons-pencil:person-circle-off",
	});
}

export default Component;
