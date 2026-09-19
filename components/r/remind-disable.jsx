import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n23zu4msj.css';
import '../../css/t/t4evihb7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n23zu4msj"/><path class="t4evihb7w"/></g>`,
		"fallback": "icon-park-outline:remind-disable",
	});
}

export default Component;
