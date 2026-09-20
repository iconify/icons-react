import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qvdkplk8k.css';
import '../../css/d/dkl786euf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="qvdkplk8k"/><path vector-effect="non-scaling-stroke" class="dkl786euf"/></g>`,
		"fallback": "wordpress:list",
	});
}

export default Component;
