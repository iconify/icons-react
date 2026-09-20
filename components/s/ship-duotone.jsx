import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-wuxkb1h.css';
import '../../css/a/aromwjbif.css';
import '../../css/m/mzi_pcioc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i-wuxkb1h"/><path class="aromwjbif"/><path class="mzi_pcioc"/></g>`,
		"fallback": "keyline-icons:ship-duotone",
	});
}

export default Component;
