import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le9kem29e.css';
import '../../css/j/j1go70hcn.css';
import '../../css/l/lgr3-yo0q.css';
import '../../css/r/rsqzy8bze.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le9kem29e"/><path class="j1go70hcn"/><circle class="lgr3-yo0q"/><path class="rsqzy8bze"/><path class="n35dlibfy"/></g>`,
		"fallback": "iconamoon:notification-off-duotone",
	});
}

export default Component;
