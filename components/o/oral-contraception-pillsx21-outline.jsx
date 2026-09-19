import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/likki-3cm.css';
import '../../css/j/ja7p-p5za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="likki-3cm"/><path class="ja7p-p5za"/></g>`,
		"fallback": "healthicons:oral-contraception-pillsx21-outline",
	});
}

export default Component;
