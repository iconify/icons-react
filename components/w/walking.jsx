import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xka6v174v.css';
import '../../css/f/fvmx4acrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xka6v174v"/><path class="fvmx4acrj"/></g>`,
		"fallback": "iconoir:walking",
	});
}

export default Component;
