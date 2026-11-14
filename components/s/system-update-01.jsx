import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y6lm52i9f.css';
import '../../css/q/qwru_zbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y6lm52i9f"/><path class="qwru_zbsl"/></g>`,
		"fallback": "hugeicons:system-update-01",
	});
}

export default Component;
