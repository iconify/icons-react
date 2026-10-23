import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1jlnjbop.css';
import '../../css/b/b14ix3blp.css';
import '../../css/x/xg6ujvw9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t1jlnjbop"/><path class="b14ix3blp"/><path class="xg6ujvw9o"/></g>`,
		"fallback": "andrsrxn:skirt",
	});
}

export default Component;
