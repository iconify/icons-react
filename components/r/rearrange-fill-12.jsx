import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e44b6rnsm.css';
import '../../css/c/c_uln0btt.css';
import '../../css/d/dk8tv0byu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="e44b6rnsm"/><rect class="c_uln0btt"/><rect class="dk8tv0byu"/></g>`,
		"fallback": "garden:rearrange-fill-12",
	});
}

export default Component;
