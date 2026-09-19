import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afdj8ubap.css';
import '../../css/i/i_eawsnbu.css';
import '../../css/r/rdxa_jb_c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afdj8ubap"/><path class="i_eawsnbu"/><path class="rdxa_jb_c"/></g>`,
		"fallback": "glyphs:scroll-duo",
	});
}

export default Component;
