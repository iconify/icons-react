import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7vj0622h.css';
import '../../css/o/o6a_hsykw.css';
import '../../css/h/hmvp54drn.css';
import '../../css/t/t9r7g6nbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7vj0622h"/><path class="o6a_hsykw"/><path class="hmvp54drn"/><path class="t9r7g6nbq"/></g>`,
		"fallback": "andrsrxn:tag-asterisk",
	});
}

export default Component;
