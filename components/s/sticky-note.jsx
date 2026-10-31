import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kudym0blp.css';
import '../../css/w/we1o4actj.css';
import '../../css/f/fypf74i3r.css';
import '../../css/y/ypfnvobyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kudym0blp"/><path class="we1o4actj wm-shine"/><path class="fypf74i3r wm-k"/><path class="wm-a ypfnvobyz"/></g>`,
		"fallback": "withicons-kawaii:sticky-note",
	});
}

export default Component;
