import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jebzb4_gz.css';
import '../../css/c/cmbwwsbsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jebzb4_gz"/><path class="cmbwwsbsq"/></g>`,
		"fallback": "streamline-flex-color:voice-scan-2-flat",
	});
}

export default Component;
