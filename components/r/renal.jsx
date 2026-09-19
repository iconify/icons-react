import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mg427tbmh.css';
import '../../css/b/bfso1_ihz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mg427tbmh"/><path class="bfso1_ihz"/></g>`,
		"fallback": "icon-park-outline:renal",
	});
}

export default Component;
