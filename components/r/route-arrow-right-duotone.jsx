import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j82o82bbn.css';
import '../../css/k/knjj2cdia.css';
import '../../css/b/bnrr-abcb.css';
import '../../css/e/eu1_bqbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j82o82bbn"/><path class="knjj2cdia"/><path class="bnrr-abcb"/><path class="eu1_bqbdw"/></g>`,
		"fallback": "lucide-extended:route-arrow-right-duotone",
	});
}

export default Component;
