import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qmgrdexng.css';
import '../../css/r/r4dlvobwc.css';
import '../../css/x/x7pgg2f2r.css';
import '../../css/o/o1fxrtmvk.css';
import '../../css/e/ekf-2nkms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qmgrdexng wm-deco"/><path class="r4dlvobwc wm-deco"/><path class="wm-deco x7pgg2f2r"/><path class="o1fxrtmvk wm-k"/><path class="ekf-2nkms wm-deco"/></g>`,
		"fallback": "withicons:sigma-blueprint",
	});
}

export default Component;
