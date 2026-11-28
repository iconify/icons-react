import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/os8oqcbut.css';
import '../../css/f/fjdvl-bkk.css';
import '../../css/i/ilo04bcis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="os8oqcbut"/><path class="fjdvl-bkk"/><path class="ilo04bcis"/></g>`,
		"fallback": "iconaut:square-split-vertical-duo",
	});
}

export default Component;
