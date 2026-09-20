import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tugnh5bel.css';
import '../../css/a/aik3ceb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tugnh5bel"/><path class="aik3ceb2o"/></g>`,
		"fallback": "keyline-icons:thumbs-down-duotone",
	});
}

export default Component;
