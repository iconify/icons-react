import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/a/agk31vb-b.css';
import '../../css/t/tl619dqzr.css';
import '../../css/x/xy8nfreah.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="agk31vb-b"/><path class="tl619dqzr"/></g><path class="xy8nfreah"/>`,
		"fallback": "openmoji:phoenix",
	});
}

export default Component;
