import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufp8wl_cw.css';
import '../../css/o/o9_iiq7is.css';
import '../../css/f/fqxe8mmxs.css';
import '../../css/a/acpwzpyze.css';
import '../../css/x/xb18t45nt.css';
import '../../css/d/di8cecc-i.css';
import '../../css/o/otr13tbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufp8wl_cw"/><path clip-rule="evenodd" class="o9_iiq7is"/><path class="fqxe8mmxs"/><path class="acpwzpyze"/><path class="xb18t45nt"/><path clip-rule="evenodd" class="di8cecc-i"/><path class="otr13tbix"/></g>`,
		"fallback": "healthicons:qr-code2x-outline",
	});
}

export default Component;
