import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aurlq6b-o.css';
import '../../css/y/yo3nrpb1b.css';
import '../../css/n/n98nelb6p.css';
import '../../css/m/m3tgrzslv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aurlq6b-o"/><path class="yo3nrpb1b"/><path class="n98nelb6p"/><path class="m3tgrzslv"/></g>`,
		"fallback": "glyphs:skull-1-duo",
	});
}

export default Component;
