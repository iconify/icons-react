import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/tukj1xbmg.css';
import '../../css/x/x2n8nub6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="tukj1xbmg"/><path class="x2n8nub6m"/></g>`,
		"fallback": "doodle-icons:save",
	});
}

export default Component;
