import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/r_guedbbh.css';
import '../../css/a/ahf0znbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="r_guedbbh"/><path class="ahf0znbzq"/></g>`,
		"fallback": "streamline-cyber:shopping-cart-add",
	});
}

export default Component;
