import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pvgwnacna.css';
import '../../css/x/x-mj82bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pvgwnacna"/><path class="x-mj82bgs"/></g>`,
		"fallback": "streamline-freehand-color:stairs-descend",
	});
}

export default Component;
