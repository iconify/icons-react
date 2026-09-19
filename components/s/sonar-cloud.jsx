import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/y/ygoihm2_o.css';
import '../../css/w/w0-fnvnzh.css';
import '../../css/m/mcckfvh8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="ygoihm2_o"/><path class="w0-fnvnzh"/><path class="mcckfvh8k"/></g>`,
		"fallback": "catppuccin:sonar-cloud",
	});
}

export default Component;
