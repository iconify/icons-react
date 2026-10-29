import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/ptcsdyb2z.css';
import '../../css/m/mtw_nubmh.css';
import '../../css/y/yyja13b7h.css';
import '../../css/k/k56gh1yvu.css';
import '../../css/g/gxjs16b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ptcsdyb2z wm-k"/><path class="mtw_nubmh wm-a"/><path class="wm-shadow yyja13b7h"/><path class="k56gh1yvu wm-k"/><path class="gxjs16b5s wm-a"/></g>`,
		"fallback": "withicons:lasso-engrave",
	});
}

export default Component;
