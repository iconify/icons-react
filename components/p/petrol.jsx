import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kjic1aczr.css';
import '../../css/e/e6pm4obja.css';
import '../../css/l/lume5fb4x.css';
import '../../css/m/m5rmsl-7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="kjic1aczr"/><path class="e6pm4obja"/><path class="lume5fb4x"/><path class="m5rmsl-7t"/></g>`,
		"fallback": "icon-park:petrol",
	});
}

export default Component;
