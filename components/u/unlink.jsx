import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jrfql7bke.css';
import '../../css/w/w4qxw7b5w.css';
import '../../css/w/wkg0a0bgk.css';
import '../../css/e/e0izkne-h.css';
import '../../css/u/unkvyfx-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jrfql7bke"/><path class="w4qxw7b5w"/><path class="wkg0a0bgk wm-shine"/><path class="e0izkne-h wm-k"/><path class="unkvyfx-l wm-s"/></g>`,
		"fallback": "withicons-kawaii:unlink",
	});
}

export default Component;
