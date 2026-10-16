import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un_01ximz.css';
import '../../css/m/m4rbgbbhm.css';
import '../../css/q/qzowdsb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un_01ximz"/><path class="m4rbgbbhm"/><path class="qzowdsb6o"/>`,
		"fallback": "energy-icons:phone-outgoing-48",
	});
}

export default Component;
