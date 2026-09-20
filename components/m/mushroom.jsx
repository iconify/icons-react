import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7azacbot.css';
import '../../css/z/zmqo05bbh.css';
import '../../css/n/n0bl6zbqp.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/k/ktc_dd8dl.css';
import '../../css/z/zkkiystws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7azacbot"/><path class="zmqo05bbh"/><path class="n0bl6zbqp"/><g class="av3m8fbrw"><path class="ktc_dd8dl"/><path class="zkkiystws"/></g></g>`,
		"fallback": "tdesign:mushroom",
	});
}

export default Component;
