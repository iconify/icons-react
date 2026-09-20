import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pfayoccfo.css';
import '../../css/e/ez3-mqhsi.css';
import '../../css/i/i45uuep6s.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="pfayoccfo"/><path class="ez3-mqhsi"/><path class="i45uuep6s"/></g>`,
		"fallback": "marketeq:tent",
	});
}

export default Component;
