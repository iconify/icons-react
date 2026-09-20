import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9fzepbyk.css';
import '../../css/g/g1_xiglcm.css';
import '../../css/a/a6k7bkb_m.css';
import '../../css/v/v2ww57mqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b9fzepbyk"/><path class="g1_xiglcm"/><path class="a6k7bkb_m"/><path class="v2ww57mqh"/></g>`,
		"fallback": "streamline-freehand-color:iris-scan-target",
	});
}

export default Component;
