import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7vj0622h.css';
import '../../css/o/o6a_hsykw.css';
import '../../css/h/hmvp54drn.css';
import '../../css/a/az8zj8b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7vj0622h"/><path class="o6a_hsykw"/><path class="hmvp54drn"/><path class="az8zj8b2r"/></g>`,
		"fallback": "andrsrxn:tag",
	});
}

export default Component;
