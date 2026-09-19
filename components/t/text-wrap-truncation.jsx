import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vuc32ac1y.css';
import '../../css/l/luspzab5n.css';
import '../../css/l/ldm5tkdqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="vuc32ac1y"/><path class="luspzab5n"/><path class="ldm5tkdqi"/></g>`,
		"fallback": "icon-park:text-wrap-truncation",
	});
}

export default Component;
