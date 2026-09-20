import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ha04ivbbx.css';
import '../../css/c/cmauxuc4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ha04ivbbx"/><path class="cmauxuc4r"/></g>`,
		"fallback": "streamline-ultimate:pathfinder-minus-back",
	});
}

export default Component;
