import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_2mwcclz.css';
import '../../css/w/wsbc11bop.css';
import '../../css/t/tr1qbin6e.css';
import '../../css/d/dfs3s5lnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_2mwcclz"/><path class="wsbc11bop"/><circle class="tr1qbin6e"/><path class="dfs3s5lnw"/></g>`,
		"fallback": "andrsrxn:safe-box",
	});
}

export default Component;
