import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jr1188bns.css';
import '../../css/k/k6k7_mn_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="jr1188bns"/><path class="k6k7_mn_p"/></g>`,
		"fallback": "icon-park:pills",
	});
}

export default Component;
