import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a6gbtzmla.css';
import '../../css/p/pywz4jsap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a6gbtzmla"/><path class="pywz4jsap"/></g>`,
		"fallback": "streamline-color:potted-flower-tulip-flat",
	});
}

export default Component;
