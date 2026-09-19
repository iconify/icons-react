import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qnylsibzn.css';
import '../../css/y/y7kz-h4zl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qnylsibzn"/><path class="y7kz-h4zl"/></g>`,
		"fallback": "icon-park-outline:rotation-vertical",
	});
}

export default Component;
