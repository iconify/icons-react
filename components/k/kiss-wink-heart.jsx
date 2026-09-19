import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eon37-7oa.css';
import '../../css/y/y31nl7bsa.css';
import '../../css/h/hyc9jcbmb.css';
import '../../css/d/ducbzu09b.css';
import '../../css/h/hznjk-boo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eon37-7oa"/><path class="y31nl7bsa"/><circle class="hyc9jcbmb"/><path class="ducbzu09b"/><path clip-rule="evenodd" class="hznjk-boo"/></g>`,
		"fallback": "glyphs-poly:kiss-wink-heart",
	});
}

export default Component;
