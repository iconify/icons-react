import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha8_tdyso.css';
import '../../css/r/r0ghz7b6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha8_tdyso"/><path class="r0ghz7b6h"/>`,
		"fallback": "fxemoji:mapleleaf",
	});
}

export default Component;
