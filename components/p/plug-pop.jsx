import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/s/s2tmyzblz.css';
import '../../css/o/oytpc8bis.css';
import '../../css/n/nnyx7_bgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="s2tmyzblz"/><path class="oytpc8bis"/><path class="nnyx7_bgl"/></g>`,
		"fallback": "streamline-kameleon-color:plug-pop",
	});
}

export default Component;
