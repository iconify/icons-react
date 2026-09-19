import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejyy-r0nx.css';
import '../../css/z/z4bh7cczu.css';
import '../../css/a/at9p7vvwe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ejyy-r0nx"/><path class="z4bh7cczu"/><path class="at9p7vvwe"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers-light",
	});
}

export default Component;
