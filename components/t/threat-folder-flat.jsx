import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hqtysac5g.css';
import '../../css/z/zyb2qu_wj.css';
import '../../css/n/ncjvozvar.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hqtysac5g"/><path class="zyb2qu_wj"/><path class="ncjvozvar"/></g>`,
		"fallback": "streamline-color:threat-folder-flat",
	});
}

export default Component;
