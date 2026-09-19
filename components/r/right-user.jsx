import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b6mu38bbk.css';
import '../../css/z/z6d_ftb-e.css';
import '../../css/r/rrf8tebmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="b6mu38bbk"/><path class="z6d_ftb-e"/><path class="rrf8tebmg"/></g>`,
		"fallback": "icon-park-outline:right-user",
	});
}

export default Component;
