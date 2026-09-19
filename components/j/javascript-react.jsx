import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnkn5nb4l.css';
import '../../css/y/yytmiewvb.css';
import '../../css/x/xt121f3ic.css';
import '../../css/v/vhm2djnqg.css';
import '../../css/d/d3co6xbya.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cnkn5nb4l"><path class="yytmiewvb"/><path class="xt121f3ic"/><path class="vhm2djnqg"/><path class="d3co6xbya"/></g>`,
		"fallback": "catppuccin:javascript-react",
	});
}

export default Component;
