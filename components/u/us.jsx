import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bue8_rb3u.css';
import '../../css/w/w13ubjbvr.css';
import '../../css/w/wdlx4qwzb.css';
import '../../css/i/ii4ionbci.css';

const viewBox = {"width":300,"height":159};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bue8_rb3u"/><path class="w13ubjbvr"/><path class="wdlx4qwzb"/><path class="ii4ionbci"/></g>`,
		"fallback": "cif:us",
	});
}

export default Component;
