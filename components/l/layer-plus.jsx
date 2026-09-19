import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4cfygela.css';
import '../../css/t/tdlchnb-u.css';
import '../../css/r/rykek3b0h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o4cfygela"/><path class="tdlchnb-u"/><path clip-rule="evenodd" class="rykek3b0h"/></g>`,
		"fallback": "glyphs-poly:layer-plus",
	});
}

export default Component;
