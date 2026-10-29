import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bphwli6_n.css';
import '../../css/a/aip_az3-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bphwli6_n"/><path class="aip_az3-w wm-a"/></g>`,
		"fallback": "withicons:popcorn-solid",
	});
}

export default Component;
