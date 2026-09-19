import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9yoghtcm.css';
import '../../css/a/adzimibor.css';
import '../../css/o/o6m94c45h.css';
import '../../css/c/cffm_3rih.css';
import '../../css/m/mj13kebfk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="r9yoghtcm"/><path class="adzimibor"/><path class="o6m94c45h"/><path clip-rule="evenodd" class="cffm_3rih"/><path class="mj13kebfk"/></g>`,
		"fallback": "glyphs-poly:signal-tower",
	});
}

export default Component;
