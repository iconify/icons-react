import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcoqoxbfa.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgtnun53l.css';
import '../../css/q/qi_hb-v-e.css';
import '../../css/g/guy_3qpyo.css';

const viewBox = {"width":214,"height":254};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGvwchRdgK" width="214" height="254" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="kcoqoxbfa"/></mask><g mask="url(#SVGvwchRdgK)" class="ft5dv1b6b"><path clip-rule="evenodd" class="bgtnun53l"/><mask id="SVGfDAFYcAJ" width="168" height="127" x="45" y="127" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="qi_hb-v-e"/></mask><g mask="url(#SVGfDAFYcAJ)"><path clip-rule="evenodd" class="guy_3qpyo"/></g></g>`,
		"fallback": "thesvg-color:relagit-dark",
	});
}

export default Component;
