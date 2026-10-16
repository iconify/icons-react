import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8339jb7l.css';
import '../../css/i/ihsnufg-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8339jb7l"/><path class="ihsnufg-o"/></g>`,
		"fallback": "andrsrxn:star-off",
	});
}

export default Component;
