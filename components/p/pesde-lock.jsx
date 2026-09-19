import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-_pmt2dx.css';
import '../../css/p/pzo7-bcrp.css';
import '../../css/b/b5c715bxk.css';
import '../../css/j/j9pr1dbin.css';
import '../../css/v/vzdy7glxj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(.68907 0 0 .69117 -14.561 14.692)" class="y-_pmt2dx"/><path class="pzo7-bcrp"/><ellipse class="b5c715bxk"/><path class="j9pr1dbin"/><path class="vzdy7glxj"/>`,
		"fallback": "catppuccin:pesde-lock",
	});
}

export default Component;
