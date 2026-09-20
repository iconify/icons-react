import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kykwyce_t.css';
import '../../css/m/mf9q-crht.css';
import '../../css/k/kosvki5cl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kykwyce_t"/><path class="mf9q-crht"/><path class="kosvki5cl"/></g>`,
		"fallback": "streamline-color:planet",
	});
}

export default Component;
