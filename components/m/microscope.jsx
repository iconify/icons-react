import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/i/i81si4gas.css';
import '../../css/w/wo5kt2i5y.css';
import '../../css/m/m6p8it0io.css';
import '../../css/u/u_4-pkl8v.css';
import '../../css/a/ah7uefb-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="i81si4gas"/><path clip-rule="evenodd" class="wo5kt2i5y"/><path class="m6p8it0io"/><path class="u_4-pkl8v"/><path class="ah7uefb-f"/></g>`,
		"fallback": "icon-park:microscope",
	});
}

export default Component;
