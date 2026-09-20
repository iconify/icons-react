import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut4foe4in.css';
import '../../css/j/j-e6csb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut4foe4in"/><path class="j-e6csb6a"/></g>`,
		"fallback": "si:library-books-duotone",
	});
}

export default Component;
