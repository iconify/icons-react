import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdcrbbapn.css';
import '../../css/d/d2kaccbjd.css';
import '../../css/g/g_1c4cz4t.css';
import '../../css/l/lnzxizbxk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rdcrbbapn"/><path class="d2kaccbjd"/><rect class="g_1c4cz4t"/><path clip-rule="evenodd" class="lnzxizbxk"/></g>`,
		"fallback": "glyphs-poly:printer",
	});
}

export default Component;
