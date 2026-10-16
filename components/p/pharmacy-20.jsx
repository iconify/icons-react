import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfxffib8l.css';
import '../../css/w/we7578b5j.css';
import '../../css/q/qpludsmxe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfxffib8l"/><path class="we7578b5j"/><path class="qpludsmxe"/>`,
		"fallback": "energy-icons:pharmacy-20",
	});
}

export default Component;
