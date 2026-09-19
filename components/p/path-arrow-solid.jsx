import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/r/r5i3w-b5g.css';
import '../../css/s/spqq0vbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="r5i3w-b5g"/><path class="spqq0vbzc"/></g>`,
		"fallback": "iconoir:path-arrow-solid",
	});
}

export default Component;
