import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5_hpm1w.css';
import '../../css/h/h3bp_99ap.css';
import '../../css/o/obovem3ey.css';

const viewBox = {"width":340,"height":340};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to5_hpm1w"><path clip-rule="evenodd" class="h3bp_99ap"/><path class="obovem3ey"/></g>`,
		"fallback": "thesvg-color:wakatime-light",
	});
}

export default Component;
