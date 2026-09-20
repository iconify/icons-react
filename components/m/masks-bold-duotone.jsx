import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imk632jdr.css';
import '../../css/r/r9srlcfrn.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/q0c5uqbol.css';
import '../../css/t/tw06w4bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="imk632jdr"/><path class="r9srlcfrn"/><g class="mc2zb0bvp"><path class="q0c5uqbol"/><path class="tw06w4bkl"/></g></g>`,
		"fallback": "solar:masks-bold-duotone",
	});
}

export default Component;
