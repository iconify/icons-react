import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qfny8kaov.css';
import '../../css/o/o9x0zt3az.css';
import '../../css/s/ssbvo1ywn.css';
import '../../css/k/k03jbobmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qfny8kaov"/><path class="o9x0zt3az"/><path class="ssbvo1ywn wm-a"/><path class="k03jbobmk wm-a"/></g>`,
		"fallback": "withicons:podcast-duo",
	});
}

export default Component;
