import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q7yau9b8e.css';
import '../../css/l/lfn9yyb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q7yau9b8e"/><path class="lfn9yyb7o"/></g>`,
		"fallback": "keyline-icons:sticky-note-sharp-two-tone",
	});
}

export default Component;
