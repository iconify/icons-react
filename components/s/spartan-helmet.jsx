import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egak3fwoq.css';
import '../../css/o/ofcl--b6c.css';
import '../../css/x/xj9isublb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="egak3fwoq"/><path class="ofcl--b6c"/><path class="xj9isublb"/></g>`,
		"fallback": "hugeicons:spartan-helmet",
	});
}

export default Component;
