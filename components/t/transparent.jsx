import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/d9_qihbxe.css';
import '../../css/x/x925mz3rg.css';
import '../../css/l/l_vga1bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="d9_qihbxe"/><path class="x925mz3rg"/><path class="l_vga1bbv"/></g>`,
		"fallback": "streamline-sharp-color:transparent",
	});
}

export default Component;
