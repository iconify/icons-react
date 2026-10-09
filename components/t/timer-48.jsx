import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cohfbvw_w.css';
import '../../css/w/ws9mn_3ua.css';
import '../../css/x/xkkhb5coq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cohfbvw_w"/><path class="ws9mn_3ua"/><path class="xkkhb5coq"/>`,
		"fallback": "energy-icons:timer-48",
	});
}

export default Component;
