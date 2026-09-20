import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vdwhlacjh.css';
import '../../css/l/lmgf_9bdg.css';
import '../../css/m/mm8-0qbzl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vdwhlacjh"/><path class="lmgf_9bdg"/><path class="mm8-0qbzl"/></g>`,
		"fallback": "marketeq:timer-error",
	});
}

export default Component;
