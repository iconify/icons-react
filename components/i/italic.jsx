import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq7pfcb6v.css';
import '../../css/j/jezerkbcr.css';
import '../../css/i/i3jn7dpga.css';
import '../../css/b/bi81cb3cb.css';
import '../../css/d/d4d4ogbjp.css';
import '../../css/a/am9bibcrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gq7pfcb6v wm-k"/><path class="jezerkbcr wm-k"/><path class="i3jn7dpga wm-k"/><path class="bi81cb3cb wm-a"/><path class="d4d4ogbjp wm-a"/><path class="am9bibcrf wm-a"/></g>`,
		"fallback": "withicons-anime:italic",
	});
}

export default Component;
