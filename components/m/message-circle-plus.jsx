import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dgqk68f6h.css';
import '../../css/g/g44mj7bdx.css';
import '../../css/b/br0v4vbwd.css';
import '../../css/k/kd630ebbd.css';
import '../../css/v/vjr9r3b2w.css';
import '../../css/v/varob_bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dgqk68f6h wm-shadow"/><path class="g44mj7bdx"/><path class="br0v4vbwd"/><path class="kd630ebbd"/><path class="vjr9r3b2w wm-shine"/><path class="varob_bfn wm-deco"/></g>`,
		"fallback": "withicons-sticker:message-circle-plus",
	});
}

export default Component;
