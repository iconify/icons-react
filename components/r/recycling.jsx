import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mvvao8zsr.css';
import '../../css/k/ks951rb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mvvao8zsr"/><path class="ks951rb4s"/></g>`,
		"fallback": "icon-park-outline:recycling",
	});
}

export default Component;
