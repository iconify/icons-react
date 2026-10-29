import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xlvdms2_b.css';
import '../../css/b/b8oq6jb1s.css';
import '../../css/e/egu5xwbsp.css';
import '../../css/k/k8u9w9nom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xlvdms2_b"/><path class="b8oq6jb1s wm-deco"/><path class="egu5xwbsp wm-k"/><path class="k8u9w9nom wm-a"/></g>`,
		"fallback": "withicons:toggle-blueprint",
	});
}

export default Component;
