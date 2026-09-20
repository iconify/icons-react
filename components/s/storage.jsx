import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnz55r2wt.css';
import '../../css/b/blcntivod.css';
import '../../css/x/x5jwzibyq.css';
import '../../css/s/sjukqcomr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="rnz55r2wt"/><circle class="blcntivod"/><circle class="x5jwzibyq"/><path class="sjukqcomr"/></g>`,
		"fallback": "oui:storage",
	});
}

export default Component;
