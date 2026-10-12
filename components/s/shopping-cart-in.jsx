import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzr3p0u5j.css';
import '../../css/z/zpre3qdjm.css';
import '../../css/g/g92qnxb9i.css';
import '../../css/h/ho0rl5ler.css';
import '../../css/q/qidc0bqma.css';
import '../../css/s/spipuhb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vzr3p0u5j"/><path class="zpre3qdjm"/><path class="g92qnxb9i"/><circle transform="rotate(90 8.25 19.11)" class="ho0rl5ler"/><circle transform="rotate(90 17.27 19.11)" class="qidc0bqma"/><path class="spipuhb1w"/></g>`,
		"fallback": "andrsrxn:shopping-cart-in",
	});
}

export default Component;
