import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ecude2y5f.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/p/pn0k_1bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ecude2y5f"/><path class="jvtjbnueh"/><path class="pn0k_1bgo"/></g>`,
		"fallback": "hugeicons:maps-square-01",
	});
}

export default Component;
