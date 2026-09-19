import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t2ph_rb9y.css';
import '../../css/w/wb6949pqh.css';
import '../../css/m/m0dii6bxv.css';
import '../../css/q/q_2wsiq5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="t2ph_rb9y"/><path class="wb6949pqh"/><path class="m0dii6bxv"/><path class="q_2wsiq5o"/></g>`,
		"fallback": "icon-park:screenshot",
	});
}

export default Component;
