import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hshzn433f.css';
import '../../css/v/vnnbe5bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hshzn433f"/><path class="vnnbe5bxj"/></g>`,
		"fallback": "iconoir:motorcycle",
	});
}

export default Component;
