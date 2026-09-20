import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqv_hlu0c.css';
import '../../css/o/okbddd1na.css';
import '../../css/z/z6l2hua_z.css';
import '../../css/x/xb_nj9blz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tqv_hlu0c"/><path clip-rule="evenodd" class="okbddd1na"/><path class="z6l2hua_z"/><path class="xb_nj9blz"/></g>`,
		"fallback": "streamline-color:play-list-folder",
	});
}

export default Component;
