import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rpztg7bea.css';
import '../../css/c/cmthnc71r.css';
import '../../css/e/enk71qo8h.css';
import '../../css/j/jzstwbbwk.css';
import '../../css/b/bgdbrekwy.css';
import '../../css/n/nvf1qccee.css';
import '../../css/o/ocn8myoqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rpztg7bea wm-shadow"/><path class="cmthnc71r"/><path class="enk71qo8h"/><path class="jzstwbbwk"/><path class="bgdbrekwy wm-shine"/><path class="nvf1qccee wm-deco"/><path class="ocn8myoqn wm-deco"/></g>`,
		"fallback": "withicons-sticker:split",
	});
}

export default Component;
