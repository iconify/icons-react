import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9662hbsj.css';
import '../../css/u/uhaljwb5n.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9662hbsj"/><path class="uhaljwb5n"/></g>`,
		"fallback": "flagpack:so",
	});
}

export default Component;
