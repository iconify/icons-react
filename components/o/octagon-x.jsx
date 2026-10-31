import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uiqmlpp4f.css';
import '../../css/c/c8vxj1btj.css';
import '../../css/b/bwkzufb4w.css';
import '../../css/j/jxyxe1_-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uiqmlpp4f wm-shadow"/><path class="c8vxj1btj wm-shadow"/><path class="bwkzufb4w"/><path class="jxyxe1_-z"/></g>`,
		"fallback": "withicons-brutal:octagon-x",
	});
}

export default Component;
