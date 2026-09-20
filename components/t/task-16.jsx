import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu2fvpofx.css';
import '../../css/b/bqv8f3bju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu2fvpofx"/><path clip-rule="evenodd" class="bqv8f3bju"/>`,
		"fallback": "qlementine-icons:task-16",
	});
}

export default Component;
