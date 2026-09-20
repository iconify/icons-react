import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmrgm14sd.css';
import '../../css/v/va1k5cb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmrgm14sd"/><path class="va1k5cb9c"/></g>`,
		"fallback": "streamline-sharp-color:user-multiple-circle-flat",
	});
}

export default Component;
