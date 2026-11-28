import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl344es-n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/z/ze9vub3ex.css';
import '../../css/w/whq42rt9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl344es-n secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="ze9vub3ex"/><path class="whq42rt9l"/></g>`,
		"fallback": "iconaut:panel-bottom-collapse-duo",
	});
}

export default Component;
