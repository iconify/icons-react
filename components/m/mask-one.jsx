import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/byxlecbov.css';
import '../../css/f/f955u0bmm.css';
import '../../css/g/g95powb-p.css';
import '../../css/u/u50o5fb2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="byxlecbov"/><path class="f955u0bmm"/><path class="g95powb-p"/><path class="u50o5fb2s"/></g>`,
		"fallback": "icon-park:mask-one",
	});
}

export default Component;
