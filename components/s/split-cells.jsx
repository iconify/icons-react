import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/q3kp-xbuy.css';
import '../../css/u/ujl-q6utp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="q3kp-xbuy"/><path class="ujl-q6utp"/></g>`,
		"fallback": "icon-park-outline:split-cells",
	});
}

export default Component;
