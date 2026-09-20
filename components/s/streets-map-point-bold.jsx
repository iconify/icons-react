import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7q7eibda.css';
import '../../css/v/vfmylgypt.css';
import '../../css/y/ynh320vat.css';
import '../../css/b/ba5x8cdcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7q7eibda"/><path class="vfmylgypt"/><path clip-rule="evenodd" class="ynh320vat"/><path class="ba5x8cdcw"/></g>`,
		"fallback": "solar:streets-map-point-bold",
	});
}

export default Component;
