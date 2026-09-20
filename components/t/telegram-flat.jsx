import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bozkrsgab.css';
import '../../css/a/aj1pnvo1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bozkrsgab"/><path class="aj1pnvo1u"/></g>`,
		"fallback": "streamline-color:telegram-flat",
	});
}

export default Component;
