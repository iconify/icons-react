import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b2ps5cbvw.css';
import '../../css/t/tsiaxdbfy.css';
import '../../css/e/ehplwkbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b2ps5cbvw"/><path class="tsiaxdbfy"/><path class="ehplwkbnk"/></g>`,
		"fallback": "keyline-icons:keyboard-sharp-duotone",
	});
}

export default Component;
