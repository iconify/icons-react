import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1alc3bdk.css';
import '../../css/b/be9_6yqgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1alc3bdk"/><path class="be9_6yqgb"/>`,
		"fallback": "carbon:thunderstorm",
	});
}

export default Component;
