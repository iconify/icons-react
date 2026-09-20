import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/u/unqgh3adw.css';
import '../../css/a/azfo-4lsc.css';
import '../../css/f/fp_ba95hc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="unqgh3adw"/><path class="azfo-4lsc"/><path class="fp_ba95hc"/></g>`,
		"fallback": "streamline-kameleon-color:sofa-3",
	});
}

export default Component;
