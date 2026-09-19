import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl9u7obry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl9u7obry"/>`,
		"fallback": "file-icons:rescript",
	});
}

export default Component;
