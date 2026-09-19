import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylpoqbbdx.css';
import '../../css/k/klf1_rboj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylpoqbbdx"/><path class="klf1_rboj"/>`,
		"fallback": "carbon:screen-map",
	});
}

export default Component;
