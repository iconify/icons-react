import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z89hgybfn.css';
import '../../css/g/gj_8sqroa.css';
import '../../css/v/v_2567bcy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z89hgybfn"/><path class="gj_8sqroa"/><path class="v_2567bcy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-cook",
	});
}

export default Component;
