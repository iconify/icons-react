import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leuvwevba.css';
import '../../css/i/i6mj3y4rj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leuvwevba"/><path class="i6mj3y4rj"/>`,
		"fallback": "carbon:tropical-storm-tracks",
	});
}

export default Component;
