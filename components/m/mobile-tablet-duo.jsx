import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xye_l8m-b.css';
import '../../css/r/ru8yyn5ec.css';
import '../../css/n/nrb9a_bbd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xye_l8m-b"/><path class="ru8yyn5ec"/><path class="nrb9a_bbd"/></g>`,
		"fallback": "glyphs:mobile-tablet-duo",
	});
}

export default Component;
