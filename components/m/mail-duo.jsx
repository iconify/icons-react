import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/f/fed-fnbdm.css';
import '../../css/c/cc09lccbi.css';
import '../../css/p/pbguh7b8b.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="fed-fnbdm"/><path class="cc09lccbi"/><path class="pbguh7b8b"/></g>`,
		"fallback": "streamline-stickies-color:mail-duo",
	});
}

export default Component;
