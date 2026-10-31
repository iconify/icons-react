import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f3q1swbhi.css';
import '../../css/n/nlnvm0s8t.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="f3q1swbhi"/><path class="nlnvm0s8t wm-shine"/><path class="gapblccgm wm-k"/><path class="d-i86qbmd wm-a"/></g>`,
		"fallback": "withicons-kawaii:sparkles",
	});
}

export default Component;
