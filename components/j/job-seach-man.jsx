import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sfgdgm2al.css';
import '../../css/a/anmlwpbfs.css';
import '../../css/h/h10thkb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sfgdgm2al"/><path class="anmlwpbfs"/><path class="h10thkb8b"/></g>`,
		"fallback": "streamline-freehand:job-seach-man",
	});
}

export default Component;
