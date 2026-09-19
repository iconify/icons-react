import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtqod2khs.css';
import '../../css/q/q7xamoboa.css';
import '../../css/j/j-rmn4b4v.css';
import '../../css/p/prvb-0bwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rtqod2khs"/><path class="q7xamoboa"/><path class="j-rmn4b4v"/><path class="prvb-0bwn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:keycap-hashtag",
	});
}

export default Component;
