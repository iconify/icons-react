import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud8-gub-u.css';
import '../../css/d/da77vd8hl.css';
import '../../css/r/rrj52fbup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud8-gub-u"/><path class="da77vd8hl"/><path class="rrj52fbup"/>`,
		"fallback": "energy-icons:wave-buoy-48",
	});
}

export default Component;
