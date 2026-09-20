import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nojb_0blk.css';
import '../../css/b/b5zul0eml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nojb_0blk"/><path class="b5zul0eml"/></g>`,
		"fallback": "streamline-freehand-color:settings-wrench-double",
	});
}

export default Component;
