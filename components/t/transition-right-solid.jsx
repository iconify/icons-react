import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/j/j5-nwacif.css';
import '../../css/w/wed93691h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="j5-nwacif"/><path class="wed93691h"/></g>`,
		"fallback": "iconoir:transition-right-solid",
	});
}

export default Component;
