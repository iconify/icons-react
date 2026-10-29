import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i9cjgyb2j.css';
import '../../css/b/bz31u0r-a.css';
import '../../css/f/fvbk-8bio.css';
import '../../css/o/opucl5yls.css';
import '../../css/i/i770uqt7u.css';
import '../../css/l/lbsx3ub7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i9cjgyb2j"/><path class="bz31u0r-a wm-s"/><path class="fvbk-8bio wm-s"/><path class="opucl5yls"/><path class="i770uqt7u wm-a"/><path class="lbsx3ub7i"/></g>`,
		"fallback": "withicons:paper-fan-duo",
	});
}

export default Component;
