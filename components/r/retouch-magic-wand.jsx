import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gkddejbjm.css';
import '../../css/m/m0xu3lb3d.css';
import '../../css/e/ekppvbc7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gkddejbjm"/><path class="m0xu3lb3d"/><path class="ekppvbc7w"/></g>`,
		"fallback": "streamline-freehand-color:retouch-magic-wand",
	});
}

export default Component;
