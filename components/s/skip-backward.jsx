import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knyooob0o.css';
import '../../css/q/qy-ljjbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="knyooob0o"/><path class="qy-ljjbiq"/></g>`,
		"fallback": "andrsrxn:skip-backward",
	});
}

export default Component;
