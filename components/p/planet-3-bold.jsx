import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywy9jdbir.css';
import '../../css/c/c-0ybgixq.css';
import '../../css/z/zve57hbkp.css';
import '../../css/v/vhkp1kw7y.css';
import '../../css/h/hyakthbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ywy9jdbir"/><path class="c-0ybgixq"/><path class="zve57hbkp"/><path class="vhkp1kw7y"/><path class="hyakthbmd"/></g>`,
		"fallback": "solar:planet-3-bold",
	});
}

export default Component;
