import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_zm7infu.css';
import '../../css/j/jzvydlbca.css';
import '../../css/t/t2jzbtbga.css';
import '../../css/c/clmzz-59m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_zm7infu"/><path class="jzvydlbca"/><path class="t2jzbtbga"/><path class="clmzz-59m"/>`,
		"fallback": "fxemoji:octopus",
	});
}

export default Component;
