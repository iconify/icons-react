import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bozkrsgab.css';
import '../../css/l/lghxvwads.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bozkrsgab"/><path class="lghxvwads"/></g>`,
		"fallback": "streamline-color:pi-symbol-circle-flat",
	});
}

export default Component;
