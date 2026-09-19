import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bz40u0bir.css';
import '../../css/o/o6ow2nvyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="bz40u0bir"/><path class="o6ow2nvyg"/></g>`,
		"fallback": "icon-park-outline:ruler-one",
	});
}

export default Component;
