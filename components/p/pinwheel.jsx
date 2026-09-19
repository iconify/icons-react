import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/j/ji09u3bkw.css';
import '../../css/e/ex4-5_bmk.css';
import '../../css/z/z-bb5mk5g.css';
import '../../css/t/ttqm_abch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="ji09u3bkw"/><path class="ex4-5_bmk"/><path class="z-bb5mk5g"/><path class="ttqm_abch"/></g>`,
		"fallback": "icon-park:pinwheel",
	});
}

export default Component;
