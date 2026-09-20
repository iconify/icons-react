import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl7e_3beo.css';
import '../../css/b/bzfqh4pxl.css';
import '../../css/r/rurh1k3ru.css';
import '../../css/q/q67g-x7ec.css';
import '../../css/r/raquohbsn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cl7e_3beo"/><path class="bzfqh4pxl"/><path class="rurh1k3ru"/><path class="q67g-x7ec"/><path class="raquohbsn"/></g>`,
		"fallback": "streamline-flex-color:target",
	});
}

export default Component;
