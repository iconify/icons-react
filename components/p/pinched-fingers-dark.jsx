import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0i93bfvu.css';
import '../../css/k/k33gfyfri.css';
import '../../css/w/wwr-czu3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0i93bfvu"/><path class="k33gfyfri"/><path class="wwr-czu3v"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers-dark",
	});
}

export default Component;
