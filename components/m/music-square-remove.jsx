import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c37_ywsig.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/t/t6huvucqa.css';
import '../../css/m/mqjqek82p.css';
import '../../css/c/coexzcbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c37_ywsig"/><path class="lkq7kmb6r"/><path class="t6huvucqa"/><path class="mqjqek82p"/><path class="coexzcbbv"/></g>`,
		"fallback": "reicon:music-square-remove",
	});
}

export default Component;
