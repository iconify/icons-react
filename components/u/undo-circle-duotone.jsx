import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ns1ktkbvg.css';
import '../../css/t/tfzbbac9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ns1ktkbvg"/><path class="tfzbbac9q"/></g>`,
		"fallback": "reicon:undo-circle-duotone",
	});
}

export default Component;
