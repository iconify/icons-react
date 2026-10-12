import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2eyocc5j.css';
import '../../css/c/cqm3e8-2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z2eyocc5j"/><path class="cqm3e8-2d"/></g>`,
		"fallback": "andrsrxn:lightning",
	});
}

export default Component;
