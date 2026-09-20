import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/r/rm377hqcb.css';
import '../../css/e/ee1wp2bsb.css';
import '../../css/y/yjpmiob1r.css';
import '../../css/c/cur45eb0e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><path class="rm377hqcb"/><path class="ee1wp2bsb"/><path class="yjpmiob1r"/></g><path class="cur45eb0e"/>`,
		"fallback": "openmoji:kitchen-knife",
	});
}

export default Component;
