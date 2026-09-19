import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sxr1bwbgh.css';
import '../../css/n/nkpchpbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect transform="rotate(-10 3.61 36.534)" class="sxr1bwbgh"/><path class="nkpchpbhx"/></g>`,
		"fallback": "icon-park-outline:straight-razor",
	});
}

export default Component;
