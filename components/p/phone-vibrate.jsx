import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3aamqbun.css';
import '../../css/t/tx7n00-oy.css';
import '../../css/y/yiphex_io.css';
import '../../css/l/ln1v7lbcx.css';
import '../../css/a/av55l1zfg.css';
import '../../css/p/phicwxh-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l3aamqbun"/><path class="tx7n00-oy"/><path class="yiphex_io"/><path class="ln1v7lbcx"/><path class="av55l1zfg"/><path class="phicwxh-m"/></g>`,
		"fallback": "streamline-ultimate-color:phone-vibrate",
	});
}

export default Component;
