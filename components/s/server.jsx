import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/ztkhbubzb.css';
import '../../css/l/llhv5wb3a.css';
import '../../css/v/vbin1hooz.css';
import '../../css/v/vlhn1d4yy.css';
import '../../css/i/i45qcxbkp.css';
import '../../css/u/ud1jk1beq.css';
import '../../css/i/iifqig7rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow ztkhbubzb"/><path class="llhv5wb3a"/><path class="vbin1hooz"/><path class="vlhn1d4yy"/><path class="i45qcxbkp wm-shine"/><path class="ud1jk1beq wm-deco"/><path class="iifqig7rj wm-deco"/></g>`,
		"fallback": "withicons-sticker:server",
	});
}

export default Component;
