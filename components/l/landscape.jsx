import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tu9gpkbal.css';
import '../../css/v/v5warx7kp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tu9gpkbal"/><path class="v5warx7kp"/></g>`,
		"fallback": "icon-park-outline:landscape",
	});
}

export default Component;
