import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_x99jnku.css';
import '../../css/w/wmren7puh.css';
import '../../css/c/cpmb4rbup.css';
import '../../css/z/zyxdqibuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_x99jnku"/><path clip-rule="evenodd" class="wmren7puh"/><path clip-rule="evenodd" class="cpmb4rbup"/><path class="zyxdqibuv"/></g>`,
		"fallback": "streamline-plump-color:watch-circle-menu-flat",
	});
}

export default Component;
