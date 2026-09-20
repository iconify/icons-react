import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxr63eybk.css';
import '../../css/n/nlitzmd7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxr63eybk"/><path clip-rule="evenodd" class="nlitzmd7k"/></g>`,
		"fallback": "streamline-plump-color:money-cash-bill-1-flat",
	});
}

export default Component;
