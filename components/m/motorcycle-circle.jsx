import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/beua5bi0c.css';
import '../../css/r/rhp-kdofu.css';
import '../../css/u/u2ehrcbue.css';
import '../../css/a/aojepetud.css';
import '../../css/p/pgqbwlb5d.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="beua5bi0c"/><path clip-rule="evenodd" class="rhp-kdofu"/><path class="u2ehrcbue"/><path class="aojepetud"/><path clip-rule="evenodd" class="pgqbwlb5d"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:motorcycle-circle",
	});
}

export default Component;
