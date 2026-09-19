import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/x/xoe5qymwl.css';
import '../../css/x/xp22pzb1r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="uf8-wnb5o"/><circle class="xoe5qymwl"/><path class="xp22pzb1r"/></g>`,
		"fallback": "garden:lifesaver-stroke-12",
	});
}

export default Component;
