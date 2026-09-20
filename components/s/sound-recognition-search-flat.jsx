import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clvjrx21n.css';
import '../../css/r/rwkubzx0j.css';
import '../../css/c/cr22hgbmq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clvjrx21n"/><path clip-rule="evenodd" class="rwkubzx0j"/><path clip-rule="evenodd" class="cr22hgbmq"/></g>`,
		"fallback": "streamline-flex-color:sound-recognition-search-flat",
	});
}

export default Component;
