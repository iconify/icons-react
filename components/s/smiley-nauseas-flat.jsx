import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fqmuc8bbw.css';
import '../../css/w/wac4m69lm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fqmuc8bbw"/><path class="wac4m69lm"/></g>`,
		"fallback": "streamline-color:smiley-nauseas-flat",
	});
}

export default Component;
