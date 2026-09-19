import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dm1oy9bzj.css';
import '../../css/u/uw96xmb7v.css';
import '../../css/f/fi-6_qg2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dm1oy9bzj"/><path class="uw96xmb7v"/><path class="fi-6_qg2a"/></g>`,
		"fallback": "iconoir:organic-food-squared",
	});
}

export default Component;
