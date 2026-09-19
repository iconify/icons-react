import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctmlb8_7m.css';
import '../../css/b/b1zejdv0v.css';
import '../../css/s/s4_dt9c8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ctmlb8_7m"><path class="b1zejdv0v"/><path class="s4_dt9c8s"/></g>`,
		"fallback": "glyphs-poly:toggle",
	});
}

export default Component;
