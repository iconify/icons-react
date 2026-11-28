import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ijevbzr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzkdlpbuh.css';
import '../../css/u/u5u_ynwfg.css';
import '../../css/e/ev46pvu6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ijevbzr secondary"/><g class="dt0cm9dhy primary"><path class="dzkdlpbuh"/><path class="u5u_ynwfg"/><path class="ev46pvu6i"/></g>`,
		"fallback": "iconaut:level-duo",
	});
}

export default Component;
