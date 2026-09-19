import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng-8hw7il.css';
import '../../css/p/p38-woblf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng-8hw7il"/><path class="p38-woblf"/>`,
		"fallback": "carbon:rule-locked",
	});
}

export default Component;
