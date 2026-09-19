import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sosoipu2w.css';
import '../../css/x/xoik_o_ww.css';
import '../../css/y/yqckadb3a.css';
import '../../css/y/yyttgubvh.css';
import '../../css/b/bg4nq3btm.css';
import '../../css/r/rxwzis5kd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sosoipu2w"/><path class="xoik_o_ww"/><path clip-rule="evenodd" class="yqckadb3a"/><path class="yyttgubvh"/><path clip-rule="evenodd" class="bg4nq3btm"/><path class="rxwzis5kd"/></g>`,
		"fallback": "healthicons:malaria-testing",
	});
}

export default Component;
