import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uf021ac0v.css';
import '../../css/s/sjyf2zbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uf021ac0v"/><path clip-rule="evenodd" class="sjyf2zbpk"/></g>`,
		"fallback": "gg:toggle-off",
	});
}

export default Component;
