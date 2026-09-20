import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/t/t85_hibub.css';
import '../../css/h/hg3membki.css';
import '../../css/d/dcswn6nli.css';
import '../../css/w/w8fn3ydyn.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="t85_hibub"/><path class="hg3membki"/><path class="dcswn6nli"/><path class="w8fn3ydyn"/></g>`,
		"fallback": "streamline-stickies-color:medal-duo",
	});
}

export default Component;
