import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjvs1cblk.css';
import '../../css/i/i81te_6rg.css';
import '../../css/u/u29l2rupw.css';
import '../../css/a/a_cxysblf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjvs1cblk"/><path class="i81te_6rg"/><path class="u29l2rupw"/><path class="a_cxysblf"/>`,
		"fallback": "openmoji:unlocked",
	});
}

export default Component;
