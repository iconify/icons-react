import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfe5vbjgh.css';
import '../../css/t/trve6st6p.css';
import '../../css/n/nhh73dlgl.css';
import '../../css/v/v69_xkqfn.css';
import '../../css/i/i8w8of8xy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jfe5vbjgh"/><path clip-rule="evenodd" class="trve6st6p"/><path clip-rule="evenodd" class="nhh73dlgl"/><path clip-rule="evenodd" class="v69_xkqfn"/><path class="i8w8of8xy"/></g>`,
		"fallback": "streamline-color:parliament-flat",
	});
}

export default Component;
