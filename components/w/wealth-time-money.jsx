import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uf-ug4bxu.css';
import '../../css/c/cn_ttacwb.css';
import '../../css/x/xgysb-b_a.css';
import '../../css/e/emhm7lbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uf-ug4bxu"/><path class="cn_ttacwb"/><path class="xgysb-b_a"/><path class="emhm7lbhr"/></g>`,
		"fallback": "streamline-freehand:wealth-time-money",
	});
}

export default Component;
