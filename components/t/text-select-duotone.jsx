import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3wsr-blu.css';
import '../../css/g/ge5ik32ip.css';
import '../../css/p/p0-no_b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v3wsr-blu"/><path class="ge5ik32ip"/><path class="p0-no_b3g"/></g>`,
		"fallback": "reicon:text-select-duotone",
	});
}

export default Component;
