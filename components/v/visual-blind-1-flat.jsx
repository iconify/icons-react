import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ocsfm7b6w.css';
import '../../css/j/jjm-10btz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ocsfm7b6w"/><path class="jjm-10btz"/></g>`,
		"fallback": "streamline-flex-color:visual-blind-1-flat",
	});
}

export default Component;
