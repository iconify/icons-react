import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/t2_ydfbfg.css';
import '../../css/q/q-xbk7bwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="t2_ydfbfg"/><path class="q-xbk7bwr"/></g>`,
		"fallback": "icon-park-outline:nasal",
	});
}

export default Component;
