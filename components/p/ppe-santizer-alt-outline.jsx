import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqynwgt5r.css';
import '../../css/j/joatjpbix.css';
import '../../css/k/k-pblkkbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iqynwgt5r"/><path class="joatjpbix"/><path clip-rule="evenodd" class="k-pblkkbo"/></g>`,
		"fallback": "healthicons:ppe-santizer-alt-outline",
	});
}

export default Component;
