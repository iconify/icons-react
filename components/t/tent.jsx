import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uld4dgb9e.css';
import '../../css/x/xhta_8bqb.css';
import '../../css/r/rcr1rebbd.css';
import '../../css/x/xlau4cdnj.css';
import '../../css/a/anjhkob_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uld4dgb9e"/><path class="xhta_8bqb"/><path class="rcr1rebbd wm-shine"/><path class="wm-k xlau4cdnj"/><path class="anjhkob_h wm-a"/></g>`,
		"fallback": "withicons-kawaii:tent",
	});
}

export default Component;
