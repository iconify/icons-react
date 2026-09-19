import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmxlmc_fk.css';
import '../../css/m/mo5jszbox.css';
import '../../css/p/p2gcfns7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmxlmc_fk"/><path class="mo5jszbox"/><path class="p2gcfns7j"/></g>`,
		"fallback": "hugeicons:scaling",
	});
}

export default Component;
