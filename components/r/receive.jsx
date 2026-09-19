import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/g20f_7b8i.css';
import '../../css/w/wlqvjmcwi.css';
import '../../css/t/tx7e6g5tu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="g20f_7b8i"/><path class="wlqvjmcwi"/><path class="tx7e6g5tu"/></g>`,
		"fallback": "icon-park-outline:receive",
	});
}

export default Component;
