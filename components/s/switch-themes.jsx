import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hwv66mdzf.css';
import '../../css/y/y--kyln4d.css';
import '../../css/x/xe96pzb2r.css';
import '../../css/v/v_bpadcpy.css';
import '../../css/r/ru9lu-39d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path clip-rule="evenodd" class="hwv66mdzf"/><path class="y--kyln4d"/><path class="xe96pzb2r"/><path class="v_bpadcpy"/><path class="ru9lu-39d"/></g>`,
		"fallback": "icon-park:switch-themes",
	});
}

export default Component;
