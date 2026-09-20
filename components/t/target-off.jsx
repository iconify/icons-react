import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axnmeqbxk.css';
import '../../css/d/dojp_5bsq.css';
import '../../css/p/pqxkbvbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="axnmeqbxk"/><path class="dojp_5bsq"/><path class="pqxkbvbvl"/></g>`,
		"fallback": "tabler:target-off",
	});
}

export default Component;
