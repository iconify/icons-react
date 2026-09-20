import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvwielt4n.css';
import '../../css/e/e-9r45bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvwielt4n"/><path class="e-9r45bgs"/></g>`,
		"fallback": "reicon:sofa2-duotone",
	});
}

export default Component;
