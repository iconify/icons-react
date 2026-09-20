import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/abzdotbaj.css';
import '../../css/w/w-32l9_pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="abzdotbaj"/><path class="w-32l9_pl"/></g>`,
		"fallback": "streamline-sharp-color:light-dark-mode-flat",
	});
}

export default Component;
