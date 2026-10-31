import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hre033b1x.css';
import '../../css/v/v-pesfn0r.css';
import '../../css/e/eclt10bpq.css';
import '../../css/j/jqpkknzhq.css';
import '../../css/k/k1-_stb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hre033b1x wm-shadow"/><path class="v-pesfn0r"/><path class="eclt10bpq"/><path class="jqpkknzhq"/><path class="k1-_stb2u"/></g>`,
		"fallback": "withicons-retro:pencil-ruler",
	});
}

export default Component;
