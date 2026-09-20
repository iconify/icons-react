import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxv6qwben.css';
import '../../css/t/tlakrmbbz.css';
import '../../css/r/rnelw49xr.css';
import '../../css/w/w3u--sb6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxv6qwben"/><path class="tlakrmbbz"/><path class="rnelw49xr"/><path class="w3u--sb6c"/></g>`,
		"fallback": "streamline-color:store-computer",
	});
}

export default Component;
