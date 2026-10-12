import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyoewac5c.css';
import '../../css/c/c37msdwqu.css';
import '../../css/j/jlkqa1bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fyoewac5c"/><path class="c37msdwqu"/><path class="jlkqa1bhk"/></g>`,
		"fallback": "lucide-extended:sticky-note-plus-duotone",
	});
}

export default Component;
