import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/w/w1lsp7b9p.css';
import '../../css/m/mz167tbku.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="w1lsp7b9p"/><path class="mz167tbku"/></g>`,
		"fallback": "skill-icons:pytorch-light",
	});
}

export default Component;
