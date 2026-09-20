import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tly2hm_th.css';
import '../../css/g/g-iuicizo.css';
import '../../css/e/e4weypbvx.css';
import '../../css/j/jsbzwmbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tly2hm_th"/><path class="g-iuicizo"/><path class="e4weypbvx"/><path class="jsbzwmbxz"/></g>`,
		"fallback": "streamline-sharp-color:typewriter",
	});
}

export default Component;
