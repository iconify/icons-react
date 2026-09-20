import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkkij8paj.css';
import '../../css/w/w2mqedb_e.css';
import '../../css/g/g3vtm102h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pkkij8paj"/><path class="w2mqedb_e"/><path clip-rule="evenodd" class="g3vtm102h"/></g>`,
		"fallback": "reicon:routing2-duotone",
	});
}

export default Component;
