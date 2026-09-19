import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxbqbtbyf.css';
import '../../css/n/n_ed3d90s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxbqbtbyf"/><path class="n_ed3d90s"/>`,
		"fallback": "ion:ios-analytics-outline",
	});
}

export default Component;
