import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_2nfzbqz.css';
import '../../css/b/bx1khacep.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gh-zkbf1h.css';
import '../../css/h/hzo2obc3l.css';
import '../../css/z/zhxlol8cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_2nfzbqz"/><path class="bx1khacep"/><g class="xtpeb-edw"><path class="gh-zkbf1h"/><path class="hzo2obc3l"/><path class="zhxlol8cy"/></g>`,
		"fallback": "solar:water-sun-bold-duotone",
	});
}

export default Component;
