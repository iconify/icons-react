import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j0eeqccgr.css';
import '../../css/k/kkkk_lfty.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/o/o8bpjub7j.css';
import '../../css/t/tnqobabbp.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j0eeqccgr wm-deco"/><path class="kkkk_lfty wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="o8bpjub7j wm-k"/><path class="tnqobabbp wm-a"/><path class="wm-k zawcaob5w"/></g>`,
		"fallback": "withicons:map-pin-blueprint",
	});
}

export default Component;
