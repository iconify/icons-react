import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n81a8ebct.css';
import '../../css/p/py-m1chjd.css';
import '../../css/n/nfe-sac6y.css';
import '../../css/s/s31kfebqu.css';
import '../../css/y/yfh4zgxvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n81a8ebct"/><path class="py-m1chjd"/><path class="nfe-sac6y"/><path class="s31kfebqu"/><path class="yfh4zgxvf"/></g>`,
		"fallback": "hugeicons:laurel-wreath-left-03",
	});
}

export default Component;
