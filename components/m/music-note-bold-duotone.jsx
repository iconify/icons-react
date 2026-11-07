import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1gz1obmo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t-oeigerl.css';
import '../../css/k/khxz2ebum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1gz1obmo"/><g class="xtpeb-edw"><path class="t-oeigerl"/><path class="khxz2ebum"/></g>`,
		"fallback": "solar:music-note-bold-duotone",
	});
}

export default Component;
