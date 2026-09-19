import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg07fubee.css';
import '../../css/m/mwiiabcko.css';
import '../../css/x/xj-bndb2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sg07fubee"/><path class="mwiiabcko"/><path class="xj-bndb2k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-beard",
	});
}

export default Component;
