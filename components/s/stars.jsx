import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/ga2-w1vzn.css';
import '../../css/z/z8owmn-2i.css';
import '../../css/r/rga5hfpvp.css';
import '../../css/g/g69fedczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ga2-w1vzn"/><path class="z8owmn-2i"/><path class="rga5hfpvp"/><path class="g69fedczw"/></g>`,
		"fallback": "hugeicons:stars",
	});
}

export default Component;
