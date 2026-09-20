import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1y52pbaz.css';
import '../../css/c/c1v4znb8o.css';
import '../../css/t/tyo0b5boh.css';
import '../../css/g/gph1hfimc.css';
import '../../css/p/p9lkp8scw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1y52pbaz"/><path class="c1v4znb8o"/><path class="tyo0b5boh"/><path class="gph1hfimc"/><path class="p9lkp8scw"/></g>`,
		"fallback": "streamline-ultimate-color:medical-specialty-pregnancy",
	});
}

export default Component;
