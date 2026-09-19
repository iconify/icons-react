import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbht7_vyu.css';
import '../../css/h/hxw8-dzsl.css';
import '../../css/f/f_pda4xwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbht7_vyu"/><path class="hxw8-dzsl"/><path class="f_pda4xwk"/>`,
		"fallback": "ion:ios-cut",
	});
}

export default Component;
