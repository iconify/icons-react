import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o7gigzb1l.css';
import '../../css/t/tfle2_b_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o7gigzb1l"/><path class="tfle2_b_c"/></g>`,
		"fallback": "icon-park-outline:mediaeditor",
	});
}

export default Component;
