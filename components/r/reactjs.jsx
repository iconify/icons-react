import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4if0pwhb.css';
import '../../css/j/jtth9xbar.css';
import '../../css/c/cxmb-_6za.css';
import '../../css/t/t6wz8cb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4if0pwhb"/><path class="jtth9xbar"/><path class="cxmb-_6za"/><circle class="t6wz8cb3t"/></g>`,
		"fallback": "proicons:reactjs",
	});
}

export default Component;
