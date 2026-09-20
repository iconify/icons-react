import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-mbrfowr.css';
import '../../css/q/q7bv4qk2t.css';
import '../../css/r/r-gymtb3u.css';
import '../../css/n/nr8tqssss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-mbrfowr"/><path class="q7bv4qk2t"/><path class="r-gymtb3u"/><path class="nr8tqssss"/></g>`,
		"fallback": "streamline-flex-color:shield-cross",
	});
}

export default Component;
