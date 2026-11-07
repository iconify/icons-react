import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dmrtm7e_f.css';
import '../../css/j/jcusk6gmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dmrtm7e_f"/><path class="jcusk6gmi"/></g>`,
		"fallback": "solar:pip-broken",
	});
}

export default Component;
