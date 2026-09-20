import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e57ldqyuj.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/j/jdy6ymapr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="e57ldqyuj"/><circle class="pwbt2qflx"/><rect class="jdy6ymapr"/></g>`,
		"fallback": "lets-icons:user-box-light",
	});
}

export default Component;
