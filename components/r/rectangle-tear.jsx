import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eckgr_guk.css';
import '../../css/h/hyf600jeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eckgr_guk"/><path class="hyf600jeo"/></g>`,
		"fallback": "icon-park-outline:rectangle-tear",
	});
}

export default Component;
