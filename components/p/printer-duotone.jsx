import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p12dhibmp.css';
import '../../css/m/mdhqcyvse.css';
import '../../css/g/g2ef58b-q.css';
import '../../css/i/ik193tb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p12dhibmp"/><path class="mdhqcyvse"/><path class="g2ef58b-q"/><path class="ik193tb7c"/></g>`,
		"fallback": "iconamoon:printer-duotone",
	});
}

export default Component;
