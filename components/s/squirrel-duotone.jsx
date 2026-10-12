import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk03ef82o.css';
import '../../css/u/uci_g5bup.css';
import '../../css/t/tzqe4nbsi.css';
import '../../css/u/uj88zs3pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xk03ef82o"/><path class="uci_g5bup"/><path class="tzqe4nbsi"/><path class="uj88zs3pg"/></g>`,
		"fallback": "lucide-extended:squirrel-duotone",
	});
}

export default Component;
