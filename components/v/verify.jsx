import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymi0nr0jc.css';
import '../../css/x/xskfa_btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ymi0nr0jc"/><path class="xskfa_btk"/></g>`,
		"fallback": "reicon:verify",
	});
}

export default Component;
