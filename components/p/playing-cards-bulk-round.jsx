import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8ya4bz6e.css';
import '../../css/z/zxq3e0bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8ya4bz6e"/><path class="zxq3e0bqt"/></g>`,
		"fallback": "coolicons:playing-cards-bulk-round",
	});
}

export default Component;
