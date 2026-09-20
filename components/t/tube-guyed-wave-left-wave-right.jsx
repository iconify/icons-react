import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5d2v1bhr.css';
import '../../css/y/y59k77qlt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5d2v1bhr"/><path class="y59k77qlt"/>`,
		"fallback": "roentgen:tube-guyed-wave-left-wave-right",
	});
}

export default Component;
