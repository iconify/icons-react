import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpu5gubso.css';
import '../../css/d/dpej5yick.css';
import '../../css/t/ta9ltoijb.css';
import '../../css/u/um3tlxbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bpu5gubso"/><path class="dpej5yick"/><path class="ta9ltoijb"/><path class="um3tlxbrv"/></g>`,
		"fallback": "andrsrxn:pencil-circle",
	});
}

export default Component;
