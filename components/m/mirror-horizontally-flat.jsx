import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p8abvyg8c.css';
import '../../css/o/opvvg9bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p8abvyg8c"/><path class="opvvg9bud"/></g>`,
		"fallback": "streamline-sharp-color:mirror-horizontally-flat",
	});
}

export default Component;
