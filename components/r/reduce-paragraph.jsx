import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfxupnbqt.css';
import '../../css/k/k9bh5h--w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfxupnbqt"/><path class="k9bh5h--w"/></g>`,
		"fallback": "hugeicons:reduce-paragraph",
	});
}

export default Component;
