import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g3cnu_1pa.css';
import '../../css/c/c9w7o3b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g3cnu_1pa wm-k"/><path class="c9w7o3b2o wm-a"/></g>`,
		"fallback": "withicons:link-2-gloss",
	});
}

export default Component;
