import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl344es-n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/z/ze9vub3ex.css';
import '../../css/l/l44r8cu4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl344es-n secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="ze9vub3ex"/><path class="l44r8cu4f"/></g>`,
		"fallback": "iconaut:panel-bottom-expand-duo",
	});
}

export default Component;
