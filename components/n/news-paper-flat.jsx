import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z10o5wddk.css';
import '../../css/b/b-doiskjx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z10o5wddk"/><path class="b-doiskjx"/></g>`,
		"fallback": "streamline-color:news-paper-flat",
	});
}

export default Component;
