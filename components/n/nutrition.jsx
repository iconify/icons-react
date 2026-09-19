import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/otvcnlb6x.css';
import '../../css/k/k_zcsk45o.css';
import '../../css/o/oad6xcb_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="otvcnlb6x"/><path class="k_zcsk45o"/><path class="oad6xcb_k"/></g>`,
		"fallback": "icon-park:nutrition",
	});
}

export default Component;
