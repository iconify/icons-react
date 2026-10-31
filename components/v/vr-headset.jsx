import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p7kgkobvq.css';
import '../../css/g/gyw8t7bmz.css';
import '../../css/d/dlvzn3b3n.css';
import '../../css/w/wsfagf5nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p7kgkobvq wm-shadow"/><path class="gyw8t7bmz wm-shadow"/><path class="dlvzn3b3n"/><path class="wsfagf5nt"/></g>`,
		"fallback": "withicons-brutal:vr-headset",
	});
}

export default Component;
