import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx55r87na.css';
import '../../css/p/pp-opys2g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zx55r87na"/><path class="pp-opys2g"/></g>`,
		"fallback": "cryptocurrency-color:trx",
	});
}

export default Component;
