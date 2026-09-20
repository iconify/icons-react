import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z45ndnbtg.css';
import '../../css/d/ds60-9fyq.css';
import '../../css/g/gj80k7mlj.css';
import '../../css/p/pn0c-rgco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z45ndnbtg"/><rect class="ds60-9fyq"/><rect class="gj80k7mlj"/><rect class="pn0c-rgco"/></g>`,
		"fallback": "reicon:sitemap-filled",
	});
}

export default Component;
