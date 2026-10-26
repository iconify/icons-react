import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/ttc2n_z4v.css';
import '../../css/o/oqjgl4bax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ttc2n_z4v"/><path class="oqjgl4bax"/></g>`,
		"fallback": "doodle-icons:key",
	});
}

export default Component;
