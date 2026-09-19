import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc2qdpb0p.css';
import '../../css/t/t6j-81blu.css';
import '../../css/g/gucqo8_bv.css';
import '../../css/u/us6k9zjpu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sc2qdpb0p"/><path class="t6j-81blu"/><path class="gucqo8_bv"/><path class="us6k9zjpu"/></g>`,
		"fallback": "fluent-emoji-flat:shark",
	});
}

export default Component;
