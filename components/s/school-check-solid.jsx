import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyeze3yrd.css';
import '../../css/z/ziaphnbba.css';
import '../../css/a/a5wousakn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eyeze3yrd"/><path class="ziaphnbba"/><path clip-rule="evenodd" class="a5wousakn"/></g>`,
		"fallback": "flowbite:school-check-solid",
	});
}

export default Component;
