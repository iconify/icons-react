import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y_yq9t1lc.css';
import '../../css/k/kakt9_b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y_yq9t1lc"/><path class="kakt9_b2s wm-a"/></g>`,
		"fallback": "withicons:text-search-solid",
	});
}

export default Component;
