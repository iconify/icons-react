import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dlhqev0ms.css';
import '../../css/o/o2ef82bsi.css';
import '../../css/l/l_zakeb6g.css';
import '../../css/q/q-7odhzki.css';
import '../../css/l/lb7_yjbgh.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dlhqev0ms wm-shadow"/><path class="o2ef82bsi"/><path class="l_zakeb6g"/><path class="q-7odhzki"/><path class="lb7_yjbgh wm-shine"/><path class="qef_sobyj wm-deco"/></g>`,
		"fallback": "withicons-sticker:receipt",
	});
}

export default Component;
