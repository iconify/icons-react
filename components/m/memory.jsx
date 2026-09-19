import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/japn8_19f.css';
import '../../css/q/qce42tb_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="japn8_19f"/><path class="qce42tb_k"/></g>`,
		"fallback": "icon-park-outline:memory",
	});
}

export default Component;
