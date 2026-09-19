import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lnyuaxrwt.css';
import '../../css/t/t69oulbwo.css';
import '../../css/a/az25568cs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="lnyuaxrwt"/><path class="t69oulbwo"/><path class="az25568cs"/></g>`,
		"fallback": "icon-park:neural",
	});
}

export default Component;
