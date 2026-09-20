import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hqtysac5g.css';
import '../../css/h/hsxv_p-bw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hqtysac5g"/><path class="hsxv_p-bw"/></g>`,
		"fallback": "streamline-color:threat-document-flat",
	});
}

export default Component;
