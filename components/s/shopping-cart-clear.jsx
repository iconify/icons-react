import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2faccfl.css';
import '../../css/u/u7k7a9bky.css';
import '../../css/t/t2ne504af.css';
import '../../css/g/ga7o29_ag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qy2faccfl"/><circle class="u7k7a9bky"/><path class="t2ne504af"/><path class="ga7o29_ag"/>`,
		"fallback": "carbon:shopping-cart-clear",
	});
}

export default Component;
