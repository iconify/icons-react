import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1qujs_dy.css';
import '../../css/g/gsq-yacdn.css';
import '../../css/g/gg3eanund.css';
import '../../css/m/mtktsu4wn.css';
import '../../css/f/fye000bgg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1qujs_dy"/><path clip-rule="evenodd" class="gsq-yacdn"/><path class="gg3eanund"/><path class="mtktsu4wn"/><path class="fye000bgg"/></g>`,
		"fallback": "glyphs-poly:mailbox",
	});
}

export default Component;
