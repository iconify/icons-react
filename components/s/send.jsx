import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sy4khbbks.css';
import '../../css/n/n__zolbbq.css';
import '../../css/v/vr7pxjbsj.css';
import '../../css/n/n432umwtk.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sy4khbbks"/><path class="n__zolbbq wm-shine"/><path class="vr7pxjbsj wm-k"/><path class="n432umwtk wm-a"/><path class="v96mv4btx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:send",
	});
}

export default Component;
