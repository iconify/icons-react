import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b0s6xwrbm.css';
import '../../css/q/qqpblxf5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b0s6xwrbm"/><path class="qqpblxf5z"/></g>`,
		"fallback": "icon-park-outline:stethoscope",
	});
}

export default Component;
