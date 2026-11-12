import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt02fdobb.css';
import '../../css/b/bbhq1vbgh.css';
import '../../css/l/lt995w-hc.css';
import '../../css/j/jmm_6pidh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt02fdobb"/><path class="bbhq1vbgh"/><path class="lt995w-hc"/><path class="jmm_6pidh"/>`,
		"fallback": "selfhst:peanut",
	});
}

export default Component;
