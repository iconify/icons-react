import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c12o_4bzm.css';
import '../../css/p/pd3_r0b4h.css';
import '../../css/z/zdoh6ubhg.css';
import '../../css/o/ok9s4-bxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="c12o_4bzm"/><path class="pd3_r0b4h"/><path class="zdoh6ubhg"/><path class="ok9s4-bxw"/></g>`,
		"fallback": "icon-park-outline:pesticide",
	});
}

export default Component;
