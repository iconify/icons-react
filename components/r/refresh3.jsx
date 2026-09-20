import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6yld9bld.css';
import '../../css/t/tn71l2bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6yld9bld"/><path class="tn71l2bxj"/></g>`,
		"fallback": "reicon:refresh3",
	});
}

export default Component;
