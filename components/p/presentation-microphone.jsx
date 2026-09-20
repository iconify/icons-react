import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r41hwjbre.css';
import '../../css/w/weo44ub0f.css';
import '../../css/k/ks34f152i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r41hwjbre"/><path class="weo44ub0f"/><path class="ks34f152i"/></g>`,
		"fallback": "streamline-ultimate:presentation-microphone",
	});
}

export default Component;
