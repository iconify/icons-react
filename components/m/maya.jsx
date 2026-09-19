import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jn55kmf9s.css';
import '../../css/w/wk1ul1j_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="jn55kmf9s"/><path class="wk1ul1j_g"/></g>`,
		"fallback": "icon-park-outline:maya",
	});
}

export default Component;
