import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkb-gqbkf.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';
import '../../css/h/hloqhhbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pkb-gqbkf"/><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/><path class="hloqhhbar"/></g>`,
		"fallback": "solar:ufo-2-bold",
	});
}

export default Component;
