import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cl0hkcbwd.css';
import '../../css/t/t7k_97bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cl0hkcbwd"/><path class="t7k_97bml"/></g>`,
		"fallback": "covid:personal-hygiene-hand-wash",
	});
}

export default Component;
