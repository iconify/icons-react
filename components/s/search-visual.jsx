import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uidqnq8xn.css';
import '../../css/f/f7kvlvawm.css';
import '../../css/d/ddu_4u57e.css';
import '../../css/q/qs_bk4z-p.css';
import '../../css/b/b9uy9ukry.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uidqnq8xn"/><path class="f7kvlvawm"/><path class="ddu_4u57e"/><path class="qs_bk4z-p"/><path class="b9uy9ukry"/></g>`,
		"fallback": "streamline-color:search-visual",
	});
}

export default Component;
