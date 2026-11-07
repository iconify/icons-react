import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg_fn_bfr.css';
import '../../css/z/z3e729uop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fg_fn_bfr"/><path class="z3e729uop"/>`,
		"fallback": "solar:toolbox-bold-duotone",
	});
}

export default Component;
