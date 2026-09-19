import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a799yhblt.css';
import '../../css/a/abjl_cc-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a799yhblt"/><path class="abjl_cc-a"/></g>`,
		"fallback": "hugeicons:setting-07",
	});
}

export default Component;
