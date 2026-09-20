import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/i/i_6ky4jyp.css';
import '../../css/x/xg5-58zko.css';
import '../../css/s/s2ttn2f_o.css';
import '../../css/z/zbzu6mbhu.css';
import '../../css/c/c0ay0abso.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="i_6ky4jyp"/><path class="xg5-58zko"/><path class="s2ttn2f_o"/><path class="zbzu6mbhu"/><path class="c0ay0abso"/></g>`,
		"fallback": "streamline-stickies-color:pen",
	});
}

export default Component;
