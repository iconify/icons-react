import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gv7df2j7x.css';
import '../../css/z/zfqr1nk8b.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWERm2vsw"><g class="ft5dv1b6b"><path class="gv7df2j7x"/><path class="zfqr1nk8b"/></g></mask></defs><path mask="url(#SVGWERm2vsw)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:ticket-alt-duotone-line",
	});
}

export default Component;
