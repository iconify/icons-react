import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/t_oef6bgs.css';
import '../../css/i/idvk68b8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="t_oef6bgs"/><path class="idvk68b8w"/></g>`,
		"fallback": "doodle-icons:love-lock",
	});
}

export default Component;
