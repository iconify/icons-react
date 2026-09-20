import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aw5voeb3o.css';
import '../../css/h/hqhuvccbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="aw5voeb3o"/><path class="hqhuvccbb"/></g>`,
		"fallback": "keyline-icons:sticky-note-check-sharp-fill",
	});
}

export default Component;
