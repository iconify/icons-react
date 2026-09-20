import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9o2-wbil.css';
import '../../css/e/eahryx7ia.css';
import '../../css/o/oqrkd9wvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p9o2-wbil"/><path clip-rule="evenodd" class="eahryx7ia"/><path class="oqrkd9wvk"/></g>`,
		"fallback": "streamline-plump-color:visual-blind-flat",
	});
}

export default Component;
