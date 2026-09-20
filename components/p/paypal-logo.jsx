import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5-cnf51v.css';
import '../../css/i/i3c3lsm5m.css';
import '../../css/w/wymu7mbbp.css';
import '../../css/z/zzfya7bbg.css';
import '../../css/w/wjbvnwbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p5-cnf51v"/><path class="i3c3lsm5m"/><path class="wymu7mbbp"/><path class="zzfya7bbg"/><path class="wjbvnwbkv"/></g>`,
		"fallback": "streamline-ultimate-color:paypal-logo",
	});
}

export default Component;
