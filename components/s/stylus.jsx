import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tybcrmi-m.css';
import '../../css/b/bsvdiixhm.css';
import '../../css/r/r_9lwu93i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tybcrmi-m"><path class="bsvdiixhm"/><path class="r_9lwu93i"/></g>`,
		"fallback": "devicon:stylus",
	});
}

export default Component;
