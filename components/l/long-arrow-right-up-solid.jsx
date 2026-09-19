import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/c/cb3cg7-ot.css';
import '../../css/u/uwzplsnnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="cb3cg7-ot"/><path class="uwzplsnnb"/></g>`,
		"fallback": "iconoir:long-arrow-right-up-solid",
	});
}

export default Component;
