import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvmqnuunv.css';
import '../../css/d/dl8fp7w2g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="yvmqnuunv"/><path class="dl8fp7w2g"/></g>`,
		"fallback": "cryptocurrency-color:rvn",
	});
}

export default Component;
