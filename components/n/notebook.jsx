import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2w3kw90h.css';
import '../../css/x/xxonbvbnd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vldzwb61k.css';
import '../../css/u/uj_cakbpx.css';
import '../../css/z/zs1hzja9h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2w3kw90h"/><path class="xxonbvbnd"/><g class="ij2x_72vy"><path class="vldzwb61k"/><path class="uj_cakbpx"/><path class="zs1hzja9h"/></g>`,
		"fallback": "openmoji:notebook",
	});
}

export default Component;
