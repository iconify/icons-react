import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omtfbmb6c.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/eub-owb9l.css';
import '../../css/k/kq-ytpe-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="omtfbmb6c"/><g class="mc2zb0bvp"><path class="eub-owb9l"/><path class="kq-ytpe-e"/></g></g>`,
		"fallback": "solar:rocket-bold-duotone",
	});
}

export default Component;
