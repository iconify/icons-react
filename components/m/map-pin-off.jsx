import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6nbbibjt.css';
import '../../css/z/z0id2ro1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6nbbibjt"/><path class="z0id2ro1p"/></g>`,
		"fallback": "tabler:map-pin-off",
	});
}

export default Component;
