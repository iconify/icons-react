import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9jxybcpr.css';
import '../../css/x/xs7xanrwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u9jxybcpr"/><path vector-effect="non-scaling-stroke" class="xs7xanrwc"/></g>`,
		"fallback": "wordpress:more-horizontal",
	});
}

export default Component;
