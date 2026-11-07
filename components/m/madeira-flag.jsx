import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/f/fxatayb4m.css';
import '../../css/v/v-w0-v66t.css';
import '../../css/p/phcemoujn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="fxatayb4m"/><path class="v-w0-v66t"/><path class="phcemoujn"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:madeira-flag",
	});
}

export default Component;
