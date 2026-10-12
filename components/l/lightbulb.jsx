import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fm--fkyxr.css';
import '../../css/u/uh277m_ob.css';
import '../../css/y/y8menpb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fm--fkyxr"/><rect class="uh277m_ob"/><path class="y8menpb7v"/></g>`,
		"fallback": "andrsrxn:lightbulb",
	});
}

export default Component;
