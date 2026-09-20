import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/blui24bpf.css';
import '../../css/q/q-f4mubqk.css';
import '../../css/i/iztie-bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="blui24bpf"/><path class="q-f4mubqk"/><path class="iztie-bpa"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-merge",
	});
}

export default Component;
