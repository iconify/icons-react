import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/h/hma-isu1d.css';
import '../../css/d/dnokfxkrz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="hma-isu1d"/><path class="dnokfxkrz"/></g>`,
		"fallback": "flag:ua-4x3",
	});
}

export default Component;
