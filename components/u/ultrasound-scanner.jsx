import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ifh0c7aot.css';
import '../../css/k/kqavqurtm.css';
import '../../css/v/vmwtyhbng.css';
import '../../css/f/fj8vt2b8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ifh0c7aot"/><path class="kqavqurtm"/><path class="vmwtyhbng"/><path class="fj8vt2b8g"/></g>`,
		"fallback": "healthicons:ultrasound-scanner",
	});
}

export default Component;
