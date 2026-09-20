import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0gb9x11h.css';
import '../../css/f/fynkojbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b0gb9x11h"/><path class="fynkojbac"/></g>`,
		"fallback": "streamline-sharp-color:user-work-laptop-wifi-flat",
	});
}

export default Component;
