import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxlo3ac_e.css';
import '../../css/x/xt4ay30jw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxlo3ac_e"/><path class="xt4ay30jw"/>`,
		"fallback": "fxemoji:up",
	});
}

export default Component;
