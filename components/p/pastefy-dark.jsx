import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx914upgl.css';
import '../../css/r/rc6--6b0h.css';
import '../../css/w/wmnw5bvdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx914upgl"/><path class="rc6--6b0h"/><path class="wmnw5bvdw"/>`,
		"fallback": "selfhst:pastefy-dark",
	});
}

export default Component;
