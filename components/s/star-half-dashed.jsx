import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxi5-xbye.css';
import '../../css/w/w7wjwfnme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cxi5-xbye"/><path class="w7wjwfnme"/></g>`,
		"fallback": "iconoir:star-half-dashed",
	});
}

export default Component;
