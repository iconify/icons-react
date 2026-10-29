import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dgqk68f6h.css';
import '../../css/g/g44mj7bdx.css';
import '../../css/e/e4zv33hvo.css';
import '../../css/e/ez6lhmbez.css';
import '../../css/q/q4t8jybsi.css';
import '../../css/l/loeep_bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dgqk68f6h wm-shadow"/><path class="g44mj7bdx"/><path class="e4zv33hvo"/><path class="ez6lhmbez"/><path class="q4t8jybsi wm-shine"/><path class="loeep_bmg wm-deco"/></g>`,
		"fallback": "withicons-sticker:message-circle-question",
	});
}

export default Component;
