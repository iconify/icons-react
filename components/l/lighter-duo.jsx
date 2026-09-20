import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/n/nkxy9-bnh.css';
import '../../css/e/erh5bpaaj.css';
import '../../css/j/juyu1-btb.css';
import '../../css/p/phaw59bsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="nkxy9-bnh"/><path class="erh5bpaaj"/><path class="juyu1-btb"/><path class="phaw59bsh"/></g>`,
		"fallback": "streamline-kameleon-color:lighter-duo",
	});
}

export default Component;
