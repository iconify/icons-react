import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lu_t7nbma.css';
import '../../css/a/a5ita3bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="lu_t7nbma"/><path class="a5ita3bje"/></g>`,
		"fallback": "grommet-icons:pocket",
	});
}

export default Component;
