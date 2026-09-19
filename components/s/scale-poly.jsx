import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sss_nfbgc.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/u/uirr576yi.css';
import '../../css/s/sgj9ldb8v.css';
import '../../css/y/yusdpmbxy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sss_nfbgc"><g class="j-npdpb0r"><path class="uirr576yi"/><path class="sgj9ldb8v"/></g><path class="yusdpmbxy"/></g>`,
		"fallback": "gis:scale-poly",
	});
}

export default Component;
