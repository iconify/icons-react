import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/evikbhbio.css';
import '../../css/t/th6z15lxd.css';
import '../../css/e/e-_y97b5b.css';
import '../../css/o/o0s61pf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="evikbhbio"/><path class="th6z15lxd"/><path class="e-_y97b5b"/><path class="o0s61pf4c"/></g>`,
		"fallback": "streamline-freehand-color:office-file-text",
	});
}

export default Component;
