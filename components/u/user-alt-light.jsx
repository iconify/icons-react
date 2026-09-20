import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nvif07b4t.css';
import '../../css/a/a-6ag2bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="nvif07b4t"/><path class="a-6ag2bvr"/></g>`,
		"fallback": "lets-icons:user-alt-light",
	});
}

export default Component;
