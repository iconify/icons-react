import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5plgss1t.css';
import '../../css/r/r8af-vbfd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5plgss1t"/><path class="r8af-vbfd"/>`,
		"fallback": "cil:trash",
	});
}

export default Component;
