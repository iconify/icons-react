import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/blvw5e11g.css';
import '../../css/u/ujezlymfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="blvw5e11g"/><path class="ujezlymfv"/></g>`,
		"fallback": "streamline-sharp-color:sharing-data-flat",
	});
}

export default Component;
