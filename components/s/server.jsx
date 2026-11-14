import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eif_5fngc.css';
import '../../css/y/yw2fz4bys.css';
import '../../css/o/obupwye0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="eif_5fngc"/><path class="yw2fz4bys"/><path class="obupwye0b"/></g>`,
		"fallback": "codex:server",
	});
}

export default Component;
