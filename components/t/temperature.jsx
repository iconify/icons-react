import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8aqxbbrl.css';
import '../../css/q/q-w374b1g.css';
import '../../css/j/juykxi29h.css';
import '../../css/v/vxtp-z-ls.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h8aqxbbrl"/><path class="q-w374b1g"/><path clip-rule="evenodd" class="juykxi29h"/><rect class="vxtp-z-ls"/></g>`,
		"fallback": "glyphs-poly:temperature",
	});
}

export default Component;
