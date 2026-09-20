import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f1k3obruh.css';
import '../../css/v/v_0e-ebny.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f1k3obruh"/><path class="v_0e-ebny"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:link-square3",
	});
}

export default Component;
