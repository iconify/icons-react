import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uxh_gy0ob.css';
import '../../css/e/es6tpgb9i.css';
import '../../css/u/ug_gxp6lu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="uxh_gy0ob"/><path class="es6tpgb9i"/><path class="ug_gxp6lu"/></g>`,
		"fallback": "icon-park:mark",
	});
}

export default Component;
