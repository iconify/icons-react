import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llper-sbd.css';
import '../../css/w/w8x1mclvl.css';
import '../../css/m/myfhbqbkv.css';
import '../../css/y/ykeey4ejx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="llper-sbd"/><path class="w8x1mclvl"/><path class="myfhbqbkv"/><path class="ykeey4ejx"/></g>`,
		"fallback": "iconamoon:synchronize-duotone",
	});
}

export default Component;
