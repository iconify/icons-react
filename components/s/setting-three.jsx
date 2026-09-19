import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q048q2b9g.css';
import '../../css/j/jt31pohym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="q048q2b9g"/><path class="jt31pohym"/></g>`,
		"fallback": "icon-park-outline:setting-three",
	});
}

export default Component;
