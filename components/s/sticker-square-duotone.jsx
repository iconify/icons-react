import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnhik0--j.css';
import '../../css/a/ao_hlmmer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pnhik0--j"/><path class="ao_hlmmer"/></g>`,
		"fallback": "reicon:sticker-square-duotone",
	});
}

export default Component;
