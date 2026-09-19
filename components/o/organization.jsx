import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt59w0z1x.css';
import '../../css/u/upwskszgb.css';
import '../../css/p/pqv887qbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt59w0z1x"/><path class="upwskszgb"/><path class="pqv887qbm"/>`,
		"fallback": "flat-color-icons:organization",
	});
}

export default Component;
