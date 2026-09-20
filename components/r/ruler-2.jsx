import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i7h008b7q.css';
import '../../css/e/e85a2s-wb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i7h008b7q"/><path class="e85a2s-wb"/></g>`,
		"fallback": "marketeq:ruler-2",
	});
}

export default Component;
