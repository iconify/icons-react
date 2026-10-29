import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mtv0-bc_o.css';
import '../../css/m/mit9yg-2j.css';
import '../../css/p/pg9_vdbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mtv0-bc_o"/><path class="mit9yg-2j wm-a"/><path class="pg9_vdbco"/></g>`,
		"fallback": "withicons:share-2-duo",
	});
}

export default Component;
