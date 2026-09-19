import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twawch7sq.css';
import '../../css/p/p_aul10jh.css';
import '../../css/q/q-y201bda.css';
import '../../css/t/tguw75yzf.css';
import '../../css/z/zbxjd84dp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twawch7sq"/><path class="p_aul10jh"/><path clip-rule="evenodd" class="q-y201bda"/><path class="tguw75yzf"/><path clip-rule="evenodd" class="zbxjd84dp"/></g>`,
		"fallback": "healthicons:loss-smell2x-outline",
	});
}

export default Component;
