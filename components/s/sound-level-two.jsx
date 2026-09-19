import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clpvn6bdj.css';

const viewBox = {"width":480,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clpvn6bdj"/>`,
		"fallback": "ps:sound-level-two",
	});
}

export default Component;
