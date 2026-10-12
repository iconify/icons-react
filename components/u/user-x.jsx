import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/u/u22a9jzzb.css';
import '../../css/x/x4nczdbml.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="u22a9jzzb"/><path class="x4nczdbml"/><path class="x9g6iubus"/></g>`,
		"fallback": "andrsrxn:user-x",
	});
}

export default Component;
