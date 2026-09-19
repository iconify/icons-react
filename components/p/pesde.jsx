import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmpoacm5v.css';
import '../../css/o/otbmhscwh.css';
import '../../css/e/ev9fgtb_q.css';
import '../../css/c/cuiy_uhbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(.68907 0 0 .69117 -13.535 14.692)" class="hmpoacm5v"/><path class="otbmhscwh"/><ellipse class="ev9fgtb_q"/><path class="cuiy_uhbg"/>`,
		"fallback": "catppuccin:pesde",
	});
}

export default Component;
