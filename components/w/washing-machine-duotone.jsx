import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s827tjbfm.css';
import '../../css/i/isb6qg8bj.css';
import '../../css/a/acycy-bpy.css';
import '../../css/s/s7oqvk7xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s827tjbfm"/><path class="isb6qg8bj"/><path clip-rule="evenodd" class="acycy-bpy"/><path class="s7oqvk7xy"/></g>`,
		"fallback": "lucide-extended:washing-machine-duotone",
	});
}

export default Component;
