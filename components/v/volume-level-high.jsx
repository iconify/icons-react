import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/km7q2ibkc.css';
import '../../css/l/l0anjnbch.css';
import '../../css/e/ejj_1pbhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="km7q2ibkc"/><path class="l0anjnbch"/><path class="ejj_1pbhe"/></g>`,
		"fallback": "streamline-plump:volume-level-high",
	});
}

export default Component;
