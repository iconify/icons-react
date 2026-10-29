import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ko5p6abwm.css';
import '../../css/p/pl_e9-0xy.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/p/pwl_zqbqj.css';
import '../../css/e/e--mbmb3x.css';
import '../../css/i/ieerklqbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ko5p6abwm wm-deco"/><path class="pl_e9-0xy wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="pwl_zqbqj wm-k"/><path class="e--mbmb3x wm-a"/><path class="ieerklqbj wm-k"/></g>`,
		"fallback": "withicons:signpost-blueprint",
	});
}

export default Component;
