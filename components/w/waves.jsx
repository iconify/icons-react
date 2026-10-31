import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/grta0fb4t.css';
import '../../css/d/d4oewab_d.css';
import '../../css/j/jif_d_-tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="grta0fb4t wm-k"/><path class="d4oewab_d wm-a"/><path class="jif_d_-tx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:waves",
	});
}

export default Component;
