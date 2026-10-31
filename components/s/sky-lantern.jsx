import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1aq21jcg.css';
import '../../css/j/jaxobrbiz.css';
import '../../css/v/v-lqhqbiy.css';
import '../../css/h/hrpwe9b1q.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m1aq21jcg"/><path class="jaxobrbiz wm-shine"/><path class="v-lqhqbiy wm-k"/><path class="hrpwe9b1q wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sky-lantern",
	});
}

export default Component;
