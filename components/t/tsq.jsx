import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci-bfktii.css';
import '../../css/j/j01m1nbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci-bfktii"/><path class="j01m1nbtv"/>`,
		"fallback": "carbon:tsq",
	});
}

export default Component;
