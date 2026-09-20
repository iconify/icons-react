import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_tqb0v5y.css';
import '../../css/w/wbw3fdboh.css';
import '../../css/n/n0zqmytam.css';
import '../../css/p/p12ft3bqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_tqb0v5y"/><path clip-rule="evenodd" class="wbw3fdboh"/><path class="n0zqmytam"/><path class="p12ft3bqu"/></g>`,
		"fallback": "streamline-color:stream",
	});
}

export default Component;
