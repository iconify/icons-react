import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk0fnxbhg.css';
import '../../css/c/cnqulp0bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xk0fnxbhg"/><path class="cnqulp0bl"/></g>`,
		"fallback": "streamline-ultimate:smiley-lol-sideways",
	});
}

export default Component;
