import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/oco35wj8x.css';
import '../../css/g/gue0ecbep.css';
import '../../css/i/i6nftmbma.css';
import '../../css/g/gp9serp5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="oco35wj8x"/><path class="gue0ecbep"/><path class="i6nftmbma"/><path class="gp9serp5c"/></g>`,
		"fallback": "icon-park:round-trip",
	});
}

export default Component;
