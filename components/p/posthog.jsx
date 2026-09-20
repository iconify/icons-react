import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt58mxs7i.css';
import '../../css/t/tgz-nedht.css';
import '../../css/p/psfupr9nf.css';
import '../../css/r/rkfl4pgii.css';
import '../../css/f/fsxewn2rq.css';

const viewBox = {"width":50,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt58mxs7i"/><path class="tgz-nedht"/><path class="psfupr9nf"/><path class="rkfl4pgii"/><path class="fsxewn2rq"/></g>`,
		"fallback": "thesvg-color:posthog",
	});
}

export default Component;
