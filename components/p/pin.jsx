import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pr34a3lre.css';
import '../../css/x/xt1a0cb7z.css';
import '../../css/o/oby63mbyj.css';
import '../../css/d/d7_k0ibce.css';
import '../../css/m/mqwymcchv.css';
import '../../css/y/y_ogckbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pr34a3lre wm-shadow"/><path class="xt1a0cb7z"/><path class="oby63mbyj"/><path class="d7_k0ibce"/><path class="mqwymcchv"/><path class="y_ogckbsx"/></g>`,
		"fallback": "withicons-retro:pin",
	});
}

export default Component;
