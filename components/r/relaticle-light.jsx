import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3xoabmc.css';
import '../../css/i/i9rrzu3ex.css';
import '../../css/n/n9pul1_5b.css';
import '../../css/z/z-uhu55bb.css';
import '../../css/d/dyso_pv8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3xoabmc"/><path class="i9rrzu3ex"/><path class="n9pul1_5b"/><path class="z-uhu55bb"/><path class="dyso_pv8k"/>`,
		"fallback": "selfhst:relaticle-light",
	});
}

export default Component;
