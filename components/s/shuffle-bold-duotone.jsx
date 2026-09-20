import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/h/hqy9cpbje.css';
import '../../css/h/h5crjsyym.css';
import '../../css/g/gf-u3tcmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="hqy9cpbje"/><path class="h5crjsyym"/><path class="gf-u3tcmh"/></g>`,
		"fallback": "solar:shuffle-bold-duotone",
	});
}

export default Component;
