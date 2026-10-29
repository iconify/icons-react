import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/r/r3aqt0b9e.css';
import '../../css/n/nekqnob7l.css';
import '../../css/b/bmywxqbru.css';
import '../../css/h/hfyu9irud.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="r3aqt0b9e"/><path class="nekqnob7l"/><path class="bmywxqbru"/><path class="hfyu9irud wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`,
		"fallback": "withicons-sticker:picture-in-picture",
	});
}

export default Component;
