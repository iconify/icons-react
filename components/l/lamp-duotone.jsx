import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm9jkgbkg.css';
import '../../css/s/s7ud3zb9r.css';
import '../../css/r/rlomcqbno.css';
import '../../css/p/pclxeftyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lm9jkgbkg"/><path class="s7ud3zb9r"/><path clip-rule="evenodd" class="rlomcqbno"/><path class="pclxeftyv"/></g>`,
		"fallback": "reicon:lamp-duotone",
	});
}

export default Component;
