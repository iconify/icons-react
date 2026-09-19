import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a5zg-ob-o.css';
import '../../css/d/dcdwkgbts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="a5zg-ob-o"/><path class="dcdwkgbts"/></g>`,
		"fallback": "garden:lock-locked-stroke-16",
	});
}

export default Component;
