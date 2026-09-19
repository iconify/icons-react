import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-3g6wbey.css';
import '../../css/c/cgz79db7m.css';
import '../../css/i/iybkvhu5s.css';
import '../../css/d/d7zoicbnn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-3g6wbey"/><path clip-rule="evenodd" class="cgz79db7m"/><path class="iybkvhu5s"/><path clip-rule="evenodd" class="d7zoicbnn"/></g>`,
		"fallback": "glyphs:layer-minus-outline",
	});
}

export default Component;
