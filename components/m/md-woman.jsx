import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0dqwhbgb.css';
import '../../css/j/jzyuqzbyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0dqwhbgb"/><path class="jzyuqzbyu"/>`,
		"fallback": "ion:md-woman",
	});
}

export default Component;
