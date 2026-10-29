import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c16lvpbmd.css';
import '../../css/d/d9xbqbgcs.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/p/p29my7dtm.css';
import '../../css/t/t2d-3xa1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c16lvpbmd wm-deco"/><path class="d9xbqbgcs wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="p29my7dtm"/><path class="t2d-3xa1h"/></g>`,
		"fallback": "withicons:shield-blueprint",
	});
}

export default Component;
