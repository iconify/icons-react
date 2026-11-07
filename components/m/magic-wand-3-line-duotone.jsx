import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/e6lmoxbxr.css';
import '../../css/t/tnqrs3bck.css';
import '../../css/x/xerbjnbev.css';
import '../../css/f/fr4skcb1d.css';
import '../../css/o/omy09pzyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="e6lmoxbxr"/><path class="tnqrs3bck"/><path class="xerbjnbev"/><path class="fr4skcb1d"/><path class="omy09pzyk"/></g>`,
		"fallback": "solar:magic-wand-3-line-duotone",
	});
}

export default Component;
