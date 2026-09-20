import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9hwsze_c.css';
import '../../css/t/tziti9bjf.css';
import '../../css/s/s-v2yp81l.css';
import '../../css/h/hst1il4_s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z9hwsze_c"/><path class="tziti9bjf"/><path class="s-v2yp81l"/><path class="hst1il4_s"/></g>`,
		"fallback": "streamline-color:shield-cross",
	});
}

export default Component;
