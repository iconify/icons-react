import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xsnp0xxat.css';
import '../../css/y/yeslf1b9b.css';
import '../../css/n/ne1xfo68v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="xsnp0xxat"/><path class="yeslf1b9b"/><path class="ne1xfo68v"/></g>`,
		"fallback": "si-glyph:safe-box",
	});
}

export default Component;
