import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1t9b8bvt.css';
import '../../css/m/mr-kkz0yl.css';
import '../../css/i/imxhuacrw.css';
import '../../css/n/n839ahj1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1t9b8bvt"/><path class="mr-kkz0yl"/><path class="imxhuacrw"/><g><path class="n839ahj1f"/></g>`,
		"fallback": "ion:md-list",
	});
}

export default Component;
