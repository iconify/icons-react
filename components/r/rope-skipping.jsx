import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6zko2bia.css';
import '../../css/z/zdoo5zbqg.css';
import '../../css/x/x7bcnabkt.css';
import '../../css/y/yy0r--bqy.css';
import '../../css/h/hwz1pbb7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6zko2bia"/><path class="zdoo5zbqg"/><path class="x7bcnabkt"/><path class="yy0r--bqy"/><path class="hwz1pbb7d"/></g>`,
		"fallback": "icon-park:rope-skipping",
	});
}

export default Component;
