import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e94ilzbar.css';
import '../../css/o/os6ewozhp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e94ilzbar"/><path class="os6ewozhp"/></g>`,
		"fallback": "marketeq:toaster",
	});
}

export default Component;
