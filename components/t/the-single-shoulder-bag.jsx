import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o79otobmw.css';
import '../../css/l/lf89i4bev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o79otobmw"/><path class="lf89i4bev"/></g>`,
		"fallback": "icon-park-outline:the-single-shoulder-bag",
	});
}

export default Component;
