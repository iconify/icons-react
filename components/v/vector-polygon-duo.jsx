import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4vzfsbdi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dtlif5byy.css';
import '../../css/c/cjbo7jb-n.css';
import '../../css/p/poyhsswtc.css';
import '../../css/x/xkr-l7b5x.css';
import '../../css/u/ue5e790aj.css';
import '../../css/e/e_5tj7mfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u4vzfsbdi"/><g class="dt0cm9dhy primary"><path class="dtlif5byy"/><path class="cjbo7jb-n"/><path class="poyhsswtc"/><path class="xkr-l7b5x"/><path class="ue5e790aj"/><path class="e_5tj7mfx"/></g>`,
		"fallback": "iconaut:vector-polygon-duo",
	});
}

export default Component;
