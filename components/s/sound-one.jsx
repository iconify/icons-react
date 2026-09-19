import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb8gueynh.css';
import '../../css/b/b152mp-tb.css';
import '../../css/n/n0b9q-beb.css';
import '../../css/r/rupa0yw7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sb8gueynh"/><path class="b152mp-tb"/><rect class="n0b9q-beb"/><path class="rupa0yw7x"/></g>`,
		"fallback": "icon-park-outline:sound-one",
	});
}

export default Component;
